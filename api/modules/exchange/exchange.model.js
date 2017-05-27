import mongoose from 'mongoose'

mongoose.Promise = global.Promise
let db = mongoose.connect('mongodb://localhost/currency')

let PriceSchema = mongoose.Schema({
	name: String,
	ICBC: [],
	ABC: [],
	BOC: [],
	CCB: [],
	BCM: [],
	CMB: [],
	HXB: [],
	CITIC: [],
	CEB: [],
	SPDB: [],
	CIB: [],
	PAB: [],
	BOS: [],
	PSBC: [],
	CGB: []
})

const PriceModel = db.model('price', PriceSchema)

export default PriceModel
