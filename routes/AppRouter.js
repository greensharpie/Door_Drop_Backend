const Router = require('express').Router()
const CustomerRouter = require('./CustomerRouter')

Router.use('/customer', CustomerRouter)

module.exports = Router
