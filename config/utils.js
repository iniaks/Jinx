export default {
	normalizePort: val => {
		let port = parseInt(val, 10)

		if (isNaN(port)) {
			return val
		}

		if (port >= 0) {
			return port
		}

		return false
	},
	onError: error => {
		if (error.syscall !== 'listen') {
			throw error
		}

		let bind = typeof port === 'string'
			? 'Pipe ' + port
			: 'Port ' + port;

		switch (error.code) {
			case 'EACCES':
				console.error(bind + ' requires elevated privileges')
				process.exit(1)
				break
		  case 'EADDRINUSE':
				console.error(bind + ' is already in use')
				process.exit(1)
		    	break
		  default:
				throw error
		}
	},
	onListening: () => {
		// let addr = server.address();
		// let bind = typeof addr === 'string'
		// 	? 'pipe ' + addr
		// 	: 'port ' + addr.port;
		console.log('Listening')
	},
	mapProp: (dic, name) => {
		let _newProp = ''
		for (let prop in dic) {
			if (prop === name || dic[prop] === name || dic[prop].indexOf(name.replace(/^\s+|\s+$/g,"")) >= 0) {
				_newProp = prop

			}
		}
		return _newProp
	}
}
