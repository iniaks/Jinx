import express from 'express'
import model from './banks/model'
import task from './banks/task'

const router = express.Router()

task.run()

router.get('/', (req, res, next) => {
	// console.log(model.get())
	model.get(result => {
		res.send({status: 200, result: result})
	})
	// let bank_name = req.query.bank.toUpperCase()
	// grasp(res, BANK_NAME_MAP[bank_name].method, BANK_NAME_MAP[bank_name].url, banks[bank_name], bank_name)
})

export default router