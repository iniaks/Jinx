import superagent from 'superagent'
import charset from 'superagent-charset'
import model from './model'
import banks from './controller'
import {BANK_NAME_MAP} from '../../model/currency'

charset(superagent)

const grasp = (method, url, resolve, name) => {
	superagent(method, url).end((error, response) => {
		if (error) {
			throw(error)
		} else {
			let result = resolve(response.text)
			result.forEach(record => {
				if (record.name == 'USD') {
					model.set(record, name)
				}
			})
		}
	})
}

export default {
	run: () => {
		setInterval(() => {
			for (let bank in BANK_NAME_MAP) {
				grasp(BANK_NAME_MAP[bank].method, BANK_NAME_MAP[bank].url, banks[bank], bank)
			}
		}, 30000)
	}
}

