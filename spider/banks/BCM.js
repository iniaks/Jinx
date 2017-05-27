import utils from '../../config/utils'
import cheerio from 'cheerio'
import {CURRENCY_NAMES, CURRENCY_PROPS} from '../map'

const BCM = res => {
	let $ = cheerio.load(res)
	let result = []
	let time = $('.exchangeTab tr').eq(1).find('td').eq(0).find('B').eq(0).text().split('：')[1]
	let data_head = $('.exchangeTab .t_thead').eq(0).find('td')
	let data_table = $('.exchangeTab').find('.data')
	data_table.each((index, currency) => {
		let record = {time: time}
		$(currency).find('td').each((prop_index, value) => {
			let _prop = utils.mapProp(CURRENCY_PROPS, data_head.eq(prop_index).text())
			_prop == 'name'
				? record[_prop] = utils.mapProp(CURRENCY_NAMES, $(value).text())
				: record[_prop] = $(value).text()
		})
		result.push(record)

	})
	return result
}

export default BCM
