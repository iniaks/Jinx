import mongoose from 'mongoose'
import {BANK_NAME_MAP} from '../../model/currency'

mongoose.Promise = global.Promise
let db = mongoose.connect('mongodb://localhost/currency')

let PriceSchema = mongoose.Schema({
	name: String,
	ICBC: [{
		name: String,
		buying_rate: Number,
		cash_buying_rate: Number,
		selling_rate: Number,
		cash_selling_rate: Number,
		time: String
	}],
	ABC: [{
		name: String,
		buying_rate: Number,
		selling_rate: Number,
		cash_buying_rate: Number,
		time: String
	}],
	BOC: [{
		name: String,
		buying_rate: Number,
		cash_buying_rate: Number,
		selling_rate: Number,
		cash_selling_rate: Number,
		conversion_rate: Number,
		time: String
	}],
	CCB: [{
		name: String,
		buying_rate: Number,
		cash_buying_rate: Number,
		selling_rate: Number,
		cash_selling_rate: Number,
		time: String
	}],
	CMB: [{
		name: String,
		unit: Number,
		buying_rate: Number,
		cash_buying_rate: Number,
		selling_rate: Number,
		cash_selling_rate: Number,
		time: String
	}],
	BCM: [{
		name: String,
		unit: Number,
		buying_rate: Number,
		cash_buying_rate: Number,
		selling_rate: Number,
		cash_selling_rate: Number,
		time: String
	}]
})

let PriceModel = db.model('price', PriceSchema)

const record_model = {
	unit: '',
	buying_rate: '',
	buying_trend: '',
	selling_trend: '',
	selling_rate: '',
	time: ''
}

const serialize = records => {
	let output = {}
	let current = records[0]
	let prev = records[1]
	for (let prop in record_model) {
		output[prop] = current[prop]
	}
	output.buying_trend = current.buying_rate - prev.buying_rate
	output.selling_trend = current.selling_rate - prev.selling_rate
	return output
}

const compare = prices => {
	let best_buying = 'ICBC'
	let best_selling = 'ICBC'
	for (let bank in prices) {
		if (prices[bank].buying_rate > prices[best_buying].buying_rate) {
			best_buying = bank
		}
		if (prices[bank].selling_rate < prices[best_selling].selling_rate) {
			best_selling = bank
		}
	}
	prices[best_buying].best_buying = true
	prices[best_selling].best_selling = true
	return prices
}

export default {
	set: (record, bank) => {
		PriceModel.findOne({name: 'USD'}, (err, doc) => {
			if (doc) {
				doc[bank].unshift(record)
				// futrue canceled
				if (doc[bank].length > 2) {
					doc[bank].splice(2, doc[bank].length - 1)
				}
				doc.save()
			}
		})
	},
	get: callback => {
		let result = {}
		PriceModel.findOne({name: 'USD'}, (err, doc) => {
			if (doc) {
				for (let bank in BANK_NAME_MAP) {
					result[bank] = serialize(doc[bank])
				}
			}
			callback(compare(result))
		})
	}
}
		