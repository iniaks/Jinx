import utils from '../../config/utils'
import cheerio from 'cheerio'
import {CURRENCY_NAMES, CURRENCY_PROPS} from '../map'

const HXB = res => {
	let $ = cheerio.load(res)
	let result = []
	let data_head = $('table.table_list thead').find('tr').find('td')
	let data_table = $('table.table_list tbody').find('tr')
	data_table.each((index, currency) => {
		let record = {}
		$(currency).find('td').each((prop_index, value) => {
			let _prop = utils.mapProp(CURRENCY_PROPS, data_head.eq(prop_index).find('.table_list_head_td').text())
			if (_prop) {
				_prop === 'name'
					? record[_prop] = utils.mapProp(CURRENCY_NAMES, $(value).text())
					: record[_prop] = $(value).text()
			}
		})
		result.push(record)
	})
	return result
}

export default HXB
