import utils from '../../config/utils'
import cheerio from 'cheerio'
import iconv from 'iconv-lite'
import {CURRENCY_NAMES, CURRENCY_PROPS} from '../map'

const CGB = res => {
	// let _res = iconv.decode(new Buffer(res), 'gbk')
	let $ = cheerio.load(res)
	let result = []
	let time = $('#publishDate').val() + $('#selectPublishTime option:selected').val()
	let data_head = $('.ratetable').find('tr').eq(0).find('th')
	let data_table = $('.ratetable').find('tr')
	data_table.each((index, currency) => {
		if (index != 0) {
			let record = {time: time}
			$(currency).find('td').each((prop_index, value) => {
				let _prop = utils.mapProp(CURRENCY_PROPS, data_head.eq(prop_index).text())
				if (_prop) {
					_prop === 'name'
						? record[_prop] = utils.mapProp(CURRENCY_NAMES, $(value).text())
						: record[_prop] = _prop === 'time' ? $(value).text() : ($(value).text() * 100).toFixed(2)
				}
			})
			result.push(record)
		}
	})
	return result
}

export default CGB
