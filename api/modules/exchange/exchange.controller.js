import PriceModel from './exchange.model'

const Model = {
	// unit: '',
	buying_rate: '',
	buying_trend: '',
	selling_trend: '',
	selling_rate: '',
	time: ''
}

const serialize = docs => {
	let output = {}
	let current = docs[0]
	let prev = docs[1]
	for (let prop in Model) {
		output[prop] = current[prop]
	}
	// compare the trend of price
	output.buying_trend = (parseFloat(current.buying_rate) - parseFloat(prev.buying_rate)).toFixed(2)
	output.selling_trend = (parseFloat(current.selling_rate) - parseFloat(prev.selling_rate)).toFixed(2)
	return output
}

const compare = (banks, result) => {
	let best_buying = banks[0]
	let best_selling = banks[0]
	for (let bank_name in result) {
		if (parseFloat(result[bank_name].buying_rate) > parseFloat(result[best_buying].buying_rate)) {
			best_buying = bank_name
		}
		if (parseFloat(result[bank_name].selling_rate) < parseFloat(result[best_selling].selling_rate)) {
			best_selling = bank_name
		}
	}
	result[best_buying].best_buying = true
	result[best_selling].best_selling = true
	return result
}

export default {
	set: (record, bank, currency) => {
		PriceModel.findOne({name: currency}, (err, doc) => {
			let _bank = bank.toUpperCase()

			if (doc) {
				if (!doc[_bank]) {
					doc[_bank] = []
				}
				doc[_bank].unshift(record)
				// future canceled
				if (doc[_bank].length > 2) {
					doc[_bank].splice(2, doc[_bank].length - 2)
				}
				doc.save(err => {
					console.info(_bank, err ? 'fail' : 'success')
				})
			} else {
				let _currency = new PriceModel({
					name: currency
				})

				_currency[_bank].unshift(record)
				_currency.save(err => {
					console.info(_bank, err ? 'fail' : 'success')
				})
			}
		})
	},
	get: (currency, banks, callback, errored) => {
		let result = {}
		PriceModel.findOne({name: currency}, (err, doc) => {
			if (doc) {
				banks.forEach(bank => {
					let _bank = bank.toUpperCase()
					result[_bank] = serialize(doc[_bank])
				})
				callback(compare(banks, result))
			} else {
				errored(err)
			}
		})
	}
}
