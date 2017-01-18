import express from 'express'
import superagent from 'superagent'
import charset from 'superagent-charset'
import {BANK_NAME_MAP} from '../model/currency'
import banks from './banks/controller'

charset(superagent)

const router = express.Router()

const grasp = (res, method, url, resolve) => {
	superagent(method, url).end((error, response) => {
		if (error) {
			throw(error)
			res.send({status: 400, msg: 'timeout'})
		} else {
			res.send({status: 200, items: resolve(response.text)})
		}
	})
}

router.get('/', (req, res, next) => {
	let bank_name = req.query.bank.toUpperCase()
	grasp(res, BANK_NAME_MAP[bank_name].method, BANK_NAME_MAP[bank_name].url, banks[bank_name])
})

export default router