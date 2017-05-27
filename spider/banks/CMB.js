import utils from '../../config/utils'
import cheerio from 'cheerio'
import {CURRENCY_NAMES, CURRENCY_PROPS} from '../map'

const CMB = res => {
	let $ = cheerio.load(res)
	let result = []
	let date = $('#rightbox').find('table').eq(0).find('tr').eq(1).find('td').eq(0).text().split('：')
	let data_head = $('table.data').find('tr').eq(0).find('td')
	let data_table = $('table.data').find('tr')
	data_table.each((index, currency) => {
		if (index !== 0) {
			let record = {}
			$(currency).find('td').each((prop_index, value) => {
				let _name = data_head.eq(prop_index).text()

				let _prop = utils.mapProp(CURRENCY_PROPS, _name)
				if (_name != '' && _prop) {
					
					if (_prop == 'name') {
						record[_prop] = utils.mapProp(CURRENCY_NAMES, $(value).text())
					} else if (_prop == 'time') {
						record[_prop] = date + ' ' + $(value).text().replace(/^\s+|\s+$/g,"")
					} else {
						record[_prop] = $(value).text().replace(/^\s+|\s+$/g,"")
					}
				}
			})
			result.push(record)
		}
	})
	return result
}

export default CMB