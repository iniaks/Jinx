import utils from '../../config/utils'
import cheerio from 'cheerio'
import {CURRENCY_NAMES, CURRENCY_PROPS} from '../map'

const BOC = res => {
	let $ = cheerio.load(res)
	let result = []
	let data_head = $('.publish table').find('th')
	let data_table = $('.publish table').find('tr')
	data_table.each((index, currency) => {
		if (index !== 0 && $(currency).find('td').eq(0).text() != '') {
			let record = {}
			$(currency).find('td').each((prop_index, value) => {
				let _prop = utils.mapProp(CURRENCY_PROPS, data_head.eq(prop_index).text())
				if (_prop === 'name') {
					record[_prop] = utils.mapProp(CURRENCY_NAMES, $(value).text())
				} else if (_prop === 'time') {
					record.time = record.time
						? record.time + ' ' + $(value).text()
						: $(value).text()
				} else {
					record[_prop] = $(value).text()
				}
			})
			result.push(record)
		}
	})
	return result
}

export default BOC
