import utils from '../../config/utils'
import cheerio from 'cheerio'
import {CURRENCY_NAMES, CURRENCY_PROPS} from '../map'

const CIB = res => {
	let $ = cheerio.load(res)
	let result = []
	let data_head = $('.table-responsive table thead').find('tr').find('th')
	let data_table = $('.table-responsive table tbody').find('tr')
	data_table.each((index, currency) => {
		let record = {}
		$(currency).find('td').each((prop_index, value) => {
			let _prop = utils.mapProp(CURRENCY_PROPS, data_head.eq(prop_index).text().replace('&nbsp;', '').replace(/^\s+|\s+$/g,""))
			if (_prop) {
				_prop === 'name'
					? record[_prop] = utils.mapProp(CURRENCY_NAMES, $(value).text().replace('&nbsp;', ''))
					: record[_prop] = _prop === 'time' ? $(value).text().replace('&nbsp;', '') : ($(value).text().replace('&nbsp;', '') * 100).toFixed(2)
			}
		})
		result.push(record)
	})
	return result
}

export default CIB
