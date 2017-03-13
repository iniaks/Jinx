import utils from '../../config/utils'
import cheerio from 'cheerio'
import {CURRENCY_NAMES, CURRENCY_PROPS} from '../map'

const BOS = res => {
	let $ = cheerio.load(res)
	let result = []
	let data_head = $('table.table01 thead').find('tr').find('th')
	let data_table = $('table.table01 tbody').find('tr')
	data_table.each((index, currency) => {
		let record = {}
		$(currency).find('td').each((prop_index, value) => {
			let _prop = utils.mapProp(CURRENCY_PROPS, data_head.eq(prop_index).find('div').text())
			if (_prop) {
				_prop === 'name'
					? record[_prop] = utils.mapProp(CURRENCY_NAMES, $(value).text())
					: record[_prop] = $(value).text()	
			}
		})
		record.time = record.time + ' ' + Date()
		result.push(record)
	})
	return result
}

export default BOS
