import express from 'express'
import http from 'http'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import cors from 'cors'
import {routes} from './config/routes'
import debug from 'debug'

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

routes.forEach(route => {
	app.use(route.path, route.component)
})

// error handler
app.use(function(req, res, next) {
	let err = new Error('Not Found')
	err.status = 404
	res.json({status: err.status, msg: 'Invalid Api'})
})

/**
 * Create HTTP server.
 */

let port = normalizePort(5257)
app.set('port', port)

const server = http.createServer(app)

server.listen(port)
server.on('error', onError)
server.on('listening', onListening)

function normalizePort(val) {
	let port = parseInt(val, 10)

	if (isNaN(port)) {
    // named pipe
		return val
	}

	if (port >= 0) {
    // port number
		return port
	}

	return false
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
      throw error
    }

    let bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port

  // handle specific listen errors with friendly messages
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
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
	let addr = server.address()
	let bind = typeof addr === 'string'
		? 'pipe ' + addr
		: 'port ' + addr.port
	debug('zuber-server:server')('Listening on ' + bind)
}
