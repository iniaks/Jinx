import express from 'express'
let router = express.Router()

router.get('/', (req, res, next) => {
	res.json({code: 200, method: 'get'})
})

export default router