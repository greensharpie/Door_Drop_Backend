const Router = require('express').Router()
const CustomerRouter = require('./CustomerRouter')
const FavoritesRouter = require('./FavoritesRouter')

Router.use('/customers', CustomerRouter)
Router.use('/favorites', FavoritesRouter)

module.exports = Router
