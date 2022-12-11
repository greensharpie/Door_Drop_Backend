const Router = require('express').Router()
const CustomerRouter = require('./CustomerRouter')
const FavoritesRouter = require('./FavoritesRouter')
const RestaurantRouter = require('./RestaurantRouter')

Router.use('/customers', CustomerRouter)
Router.use('/favorites', FavoritesRouter)
Router.use('/restaurants', RestaurantRouter)

module.exports = Router
