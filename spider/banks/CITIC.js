import {CITIC_NAMES} from '../map'

const parse = data => {
	return parseFloat(data, 10)
}

const mapName = code => {
	let name = ''
	CITIC_NAMES.forEach(currency => {
		if (code == currency.code) {
			name = currency.name
		}
	})
	return name
}

const ratio = 100000

const CITIC = res => {
	let result = []
	let data_array = res.replace(/\s/g, '').split('A')
	data_array.forEach(source => {
		if (source) {
			let record = {
				time: source.substring(1, 13),
				name: mapName(source.substring(15, 17)),
				buying_rate: parse(source.substring(29, 41)) / ratio,
				cash_buying_rate: parse(source.substring(17, 29)) / ratio,
				selling_rate: parse(source.substring(41, 53)) / ratio,
				cash_selling_rate: parse(source.substring(65, 77)) / ratio
			}
			if (record.name != '') {
				result.push(record)
			}
		}	
	})
	return result
}

export default CITIC
