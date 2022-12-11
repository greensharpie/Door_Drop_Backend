const Router = require('express').Router()
const controller = require('../controllers/OrderController')

Router.get('/order_items', controller.getOrderItems)

module.exports = Router
