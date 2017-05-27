import utils from '../../config/utils'
import {CURRENCY_NAMES} from '../map'

const ABC = res => {
	let result = []
	let data_table = JSON.parse(res)

	data_table.Data.Table.forEach((currency) => {
		let record = {
			name: utils.mapProp(CURRENCY_NAMES, currency.CurrName),
			buying_rate: parseFloat(currency.BuyingPrice).toFixed(2),
			selling_rate: parseFloat(currency.SellPrice).toFixed(2),
			time: currency.PublishTime,
			cash_buying_rate: parseFloat(currency.CashBuyingPrice).toFixed(2)
		}
		result.push(record)
	})

	return result
}

export default ABC
