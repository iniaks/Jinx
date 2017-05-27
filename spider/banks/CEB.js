import utils from '../../config/utils'
import cheerio from 'cheerio'
import {CURRENCY_NAMES, CURRENCY_PROPS} from '../map'

const CEB = res => {
	let $ = cheerio.load(res)
	let result = []
	let time = $('#t_id span').text().replace('更新时间:', '')
	let data_head = $('table.lczj_box').find('tr').eq(0).find('td')
	let data_table = $('table.lczj_box').find('tr')
	data_table.each((index, currency) => {
		if (index !== 0) {
			let record = {time: time}
			$(currency).find('td').each((prop_index, value) => {
				let _prop = utils.mapProp(CURRENCY_PROPS, data_head.eq(prop_index).text())
				if (_prop) {
					if (_prop == 'name') {
						record[_prop] = utils.mapProp(CURRENCY_NAMES, $(value).text())
					} else {
						record[_prop] = $(value).text()
					}
				}
			})
			result.push(record)
		}
	})
	return result
}

export default CEB
