import utils from '../../config/utils'
import cheerio from 'cheerio'
import {CURRENCY_NAMES, CURRENCY_PROPS} from '../map'

const PSBC = res => {
	let $ = cheerio.load(res)
	let result = []
	let data_head = $('table').find('tr').eq(0).find('th')
	let data_table = $('table').find('tr')
	data_table.each((index, currency) => {
		if (index != 0) {
			let record = {}
			$(currency).find('td').each((prop_index, value) => {
				let _prop = utils.mapProp(CURRENCY_PROPS, data_head.eq(prop_index).text())
				if (_prop) {
					_prop === 'name'
						? record[_prop] = utils.mapProp(CURRENCY_NAMES, $(value).text())
						: record[_prop] = $(value).text()
				}
			})
			if (record.name) {
				result.push(record)
			}
		}
	})
	return result
}

export default PSBC
