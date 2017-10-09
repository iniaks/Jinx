import express from 'express'
import exchangeController from './exchange.controller'
import spider from '../../../spider/grab'
import task from '../../../tasks/daily/daily.task'
import {BANK_SOURCES} from '../../../spider/source'

let router = express.Router()

// task.checkExchange()

router.get('/', (req, res, next) => {
	let currency = req.query.currency
	// let bank = req.query.bank.toUpperCase()
	let banks = req.query.banks.split(',')

	// spider.grab(BANK_SOURCES[bank].method, BANK_SOURCES[bank].charset, BANK_SOURCES[bank].url, BANK_SOURCES[bank].resolve, result => {
	// 	result.forEach(record => {
	// 		if (record.name == 'USD') {
	// 			exchangeController.set(record, bank, record.name)
	// 		}
	// 	})
	// 	res.send({code: 200, result: result})
	// })
	exchangeController.get(currency, banks, result => {
		res.json({
			status: 200,
			result: result
		})
	}, () => {res.json({
		status: 201,
		msg: 'Invalid Params'
	})})
})

export default router