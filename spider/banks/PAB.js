import utils from '../../config/utils'
import cheerio from 'cheerio'
import {CURRENCY_NAMES, CURRENCY_PROPS} from '../map'

const PAB = res => {
	let $ = cheerio.load(res)
	let result = []
	let time = $('.tabletsz p:first-child').text().replace('时间：', '')
	let data_head = $('.tabletsz table').find('tr').eq(0).find('td')
	let data_table = $('.tabletsz table').find('tr')
	data_table.each((index, currency) => {
		if (index != 0) {
			let record = {time: time}
			$(currency).find('td').each((prop_index, value) => {
				let _prop = utils.mapProp(CURRENCY_PROPS, data_head.eq(prop_index).text())
				if (_prop) {
					_prop === 'name'
						? record[_prop] = utils.mapProp(CURRENCY_NAMES, $(value).text())
						: record[_prop] = $(value).text()
				}
			})
			record.time = record.time + ' ' + Date()
			result.push(record)
		}
	})
	return result
}

export default PAB
