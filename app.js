import express from 'express'
import http from 'http'
import utils from './config/utils'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import cors from 'cors'
import {routes} from './config/routes'

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

let port = utils.normalizePort(3000)
app.set('port', port)

const server = http.createServer(app)

server.listen(port)
server.on('error', utils.onError)
server.on('listening', utils.onListening)

// 
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });
