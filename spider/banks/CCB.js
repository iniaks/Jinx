import utils from '../../config/utils'
import xmlParse from 'xml2js'
import {CCB_CURRENCY_NAMES} from '../map'

const CCB = res => {
	let result = []
	xmlParse.parseString(res, (err, source) => {
		// result = source
		source.ReferencePriceSettlements.ReferencePriceSettlement.forEach(currency => {
			let record = {
				name: CCB_CURRENCY_NAMES[parseInt(currency.$.name)],
				buying_rate: parseFloat(currency.BidRateOfCcy[0]*100).toFixed(2),
				selling_rate: parseFloat(currency.OfrRateOfCcy[0]*100).toFixed(2),
				cash_buying_rate: currency.BidRateOfCash[0],
				cash_selling_rate: currency.OfrRateOfCash[0],
				time: currency.LstPr_Dt + ' ' + currency.LstPr_Tm
			}
			result.push(record)
		})
	})
	return result
}

export default CCB
