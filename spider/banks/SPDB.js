const SPDB = res => {
	let sources = JSON.parse(res).rows
	let result = []
	sources.forEach(item => {
		let record = {
			name: item.CurrencyName.split(' ')[1],
			time: item.CREATE_DATE,
			buying_rate: parseFloat(item.BuyPrc).toFixed(2),
			cash_buying_rate: parseFloat(item.CashBuyPrc).toFixed(2),
			selling_rate: parseFloat(item.SellPrc).toFixed(2)
		}
		result.push(record)
	})
	return result
}

export default SPDB
