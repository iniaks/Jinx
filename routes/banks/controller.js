import utils from '../../utils/utils'
import cheerio from 'cheerio'
import xmlParse from 'xml2js'
import {CURRENCY_NAME_MAP, CURRENCY_PROPS_MAP, CCB_CURRENCY_NAME_MAP} from '../../model/currency'

const boc = res => {
	let $ = cheerio.load(res)
	let result = []
	let data_head = $('.publish table').find('th')
	let data_table = $('.publish table').find('tr')
	data_table.each((index, currency) => {
		if (index !== 0 && $(currency).find('td').eq(0).text() != '') {
			let record = {}
			$(currency).find('td').each((prop_index, value) => {
				let _prop = utils.mapProp(CURRENCY_PROPS_MAP, data_head.eq(prop_index).text())
				if (_prop === 'name') {
					record[_prop] = utils.mapProp(CURRENCY_NAME_MAP, $(value).text())
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

const icbc = res => {
	let $ = cheerio.load(res)
	let result = []
	let data_table = $('.tableDataTable tr')
	data_table.each((index, currency) => {
		if (index !== 0) {
			let record = {}
			$(currency).find('td').each((prop_index, value) => {
				let _prop = utils.mapProp(CURRENCY_PROPS_MAP, $('.tableDataTable tr td.tdCommonTableHead').eq(prop_index).text())
				_prop == 'name'
					? record[_prop] = utils.mapProp(CURRENCY_NAME_MAP, $(value).text())
					: record[_prop] = $(value).text()
			})
			result.push(record)
		}
	})
	return result
}

const abc = res => {
	let result = []
	let data_table = JSON.parse(res)

	data_table.Data.Table.forEach((currency) => {
		let record = {
			name: utils.mapProp(CURRENCY_NAME_MAP, currency.CurrName),
			buying_rate: parseFloat(currency.BuyingPrice).toFixed(2),
			selling_rate: parseFloat(currency.SellPrice).toFixed(2),
			time: currency.PublishTime,
			cash_buying_rate: currency.CashBuyingPrice.toFixed(2)
		}
		result.push(record)
	})

	return result
}

const ccb = res => {
	let result = []
	xmlParse.parseString(res, (err, source) => {
		// result = source
		source.ReferencePriceSettlements.ReferencePriceSettlement.forEach(currency => {
			let record = {
				name: CCB_CURRENCY_NAME_MAP[parseInt(currency.$.name)],
				buying_rate: parseFloat(currency.BidRateOfCcy[0]*100).toFixed(2),
				selling_rate: parseFloat(currency.OfrRateOfCcy[0]*100).toFixed(2),
				cash_buying_rate: currency.BidRateOfCash[0],
				cash_selling_rate: currency.OfrRateOfCash[0],
				time: currency.LstPr_Dt + ' ' + currency.LstPr_Tm
			}
			result.push(record)
		})
	})
	return result
}

const bcm = res => {
	let $ = cheerio.load(res)
	let result = []
	let time = $('.exchangeTab tr').eq(1).find('td').eq(0).find('B').eq(0).text().split('：')[1]
	let data_head = $('.exchangeTab .t_thead').eq(0).find('td')
	let data_table = $('.exchangeTab').find('.data')
	data_table.each((index, currency) => {
		let record = {time: time}
		$(currency).find('td').each((prop_index, value) => {
			let _prop = utils.mapProp(CURRENCY_PROPS_MAP, data_head.eq(prop_index).text())
			_prop == 'name'
				? record[_prop] = utils.mapProp(CURRENCY_NAME_MAP, $(value).text())
				: record[_prop] = $(value).text()
		})
		result.push(record)

	})
	return result
}

const cmb = res => {
	let $ = cheerio.load(res)
	let result = []
	let date = $('#rightbox').find('table').eq(0).find('tr').eq(1).find('td').eq(0).text().split('：')
	let data_head = $('table.data').find('tr').eq(0).find('td')
	let data_table = $('table.data').find('tr')
	data_table.each((index, currency) => {
		if (index !== 0) {
			let record = {}
			$(currency).find('td').each((prop_index, value) => {
				let _name = data_head.eq(prop_index).text().replace(/^\s+|\s+$/g,"")

				let _prop = utils.mapProp(CURRENCY_PROPS_MAP, _name)
				if (_name != '') {
					
					if (_prop == 'name') {
						record[_prop] = utils.mapProp(CURRENCY_NAME_MAP, $(value).text().replace(/^\s+|\s+$/g,""))
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

export default {
	ICBC: icbc,
	ABC: abc,
	BOC: boc,
	CCB: ccb,
	BCM: bcm,
	CMB: cmb
}