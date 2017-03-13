import index from '../api/index'
import exchange from '../api/modules/exchange/exchange.view'

export const routes = [
	{
		path: '/',
		component: index
	},
	{
		path: '/exchange',
		component: exchange
	}
]
