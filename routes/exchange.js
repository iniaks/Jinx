import express from 'express'
import superagent from 'superagent'
import charset from 'superagent-charset'
import cheerio from 'cheerio'
import utils from '../utils/utils'
import {CURRENCY_NAME_MAP, CURRENCY_PROPS_MAP, BANK_NAME_MAP} from '../model/currency'

charset(superagent)

const url = 'http://quote.eastmoney.com/center/forexlist.html'
const router = express.Router()

router.get('/', (req, res, next) => {
	superagent.get(url).charset('gbk').end((error, response) => {
		if (error) {
			throw(error)
		}

		let $ = cheerio.load(response.text)
		let result = []

		$('.mod-section-header ul li').each((index, tab) => {
			// create bank
			let _name = utils.mapProp(BANK_NAME_MAP, $(tab).children('span').text())
			let _bank = {name: _name, exchanges: []}
			// get table
			let data_table = $('.mod-datas .tab-panel').eq(index).find('table')
			// get currency
			let _navbar = data_table.find('tr').eq(0)
			data_table.find('tr').each((index, currency) => {
				if (index > 0) {
					let record = {}
					$(currency).find('td').each((index, value) => {
						let _prop = utils.mapProp(CURRENCY_PROPS_MAP, _navbar.find('th').eq(index).text())
						record[_prop] = _prop === 'name'
							? utils.mapProp(CURRENCY_NAME_MAP, $(value).text())
							: $(value).text() 
					})
					_bank.exchanges.push(record)
				}
			})
			result.push(_bank)
		})

		res.send({status: 200, items: result})
	})
})

export default router