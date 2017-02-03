import mongoose from 'mongoose'

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
				result.ICBC = doc.ICBC[0]
				result.ABC = doc.ABC[0]
				result.BOC = doc.BOC[0]
				result.CCB = doc.CCB[0]
				result.CMB = doc.CMB[0]
				result.BCM = doc.BCM[0]
			}
			callback(result)
		})
	}
}
		