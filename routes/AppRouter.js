const Router = require('express').Router()
const CustomerRouter = require('./CustomerRouter')
const FavoritesRouter = require('./FavoritesRouter')

Router.use('/customer', CustomerRouter)
Router.use('/favorites', FavoritesRouter)

module.exports = Router
