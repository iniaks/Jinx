import spider from '../../spider/grab'
import {BANK_SOURCES} from '../../spider/source'
import exchangeController from '../../api/modules/exchange/exchange.controller'

export default {
	checkExchange: () => {
		setInterval(() => {
			for (let bank in BANK_SOURCES) {
				spider.grab(BANK_SOURCES[bank].method, BANK_SOURCES[bank].charset, BANK_SOURCES[bank].url, BANK_SOURCES[bank].resolve, result => {
					result.forEach(record => {
						if (record.name == 'USD') {
							exchangeController.set(record, bank, record.name)
						}
					})
				})
			}
		}, 30000)
	}
}