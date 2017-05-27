import utils from '../../config/utils'
import cheerio from 'cheerio'
import {CURRENCY_NAMES, CURRENCY_PROPS} from '../map'

const ICBC = res => {
	let $ = cheerio.load(res)
	let result = []
	let data_table = $('.tableDataTable tr')
	data_table.each((index, currency) => {
		if (index !== 0) {
			let record = {}
			$(currency).find('td').each((prop_index, value) => {
				let _prop = utils.mapProp(CURRENCY_PROPS, $('.tableDataTable tr td.tdCommonTableHead').eq(prop_index).text())
				_prop == 'name'
					? record[_prop] = utils.mapProp(CURRENCY_NAMES, $(value).text())
					: record[_prop] = $(value).text()
			})
			result.push(record)
		}
	})
	return result
}

export default ICBC