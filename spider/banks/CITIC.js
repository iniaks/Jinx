import utils from '../../config/utils'
import {CURRENCY_NAMES} from '../map'

const CITIC = res => {
	let result = []
	let data_source = JSON.parse(res)
	let data_array = data_source.content.resultList
	data_array.forEach(source => {
		if (source) {
			let record = {
				time: source.quotePriceDate + source.quotePriceTime,
				name: utils.mapProp(CURRENCY_NAMES, source.curName),
				buying_rate: parseFloat(source.cstexcBuyPrice),
				cash_buying_rate: parseFloat(source.cstpurBuyPrice),
				selling_rate: parseFloat(source.cstexcSellPrice),
				cash_selling_rate: parseFloat(source.cstpurSellPrice)
			}
			if (record.name != '') {
				result.push(record)
			}
		}	
	})
	return result
}

export default CITIC
