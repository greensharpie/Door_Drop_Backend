const Router = require('express').Router()
const CustomerRouter = require('./CustomerRouter')
const FavoritesRouter = require('./FavoritesRouter')
const RestaurantRouter = require('./RestaurantRouter')
const OrderRouter = require('./OrderRouter')
const ItemRouter = require('./ItemRouter')

Router.use('/customers', CustomerRouter)
Router.use('/favorites', FavoritesRouter)
Router.use('/restaurants', RestaurantRouter)
Router.use('/orders', OrderRouter)
Router.use('/items', ItemRouter)

module.exports = Router
