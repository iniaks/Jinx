import superagent from 'superagent'
import charset from 'superagent-charset'

charset(superagent)

const grabData = (method, char, url, resolve, callback) => {
	let _char = char ? char : 'utf-8'
	superagent(method, url).charset(_char).end((error, res) => {
		if (error) {
			throw(error)
		} else {
			let result = resolve(res.text)
			callback(result)
		}
	})
}

export default {
	grab: grabData
}