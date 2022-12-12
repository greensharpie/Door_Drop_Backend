const Router = require('express').Router()
const controller = require('../controllers/ItemController')

Router.get('/cart_items', controller.GetOrderItems)
Router.get('/restaurant_orders', controller.GetRestaurantWithAllOrders)
Router.post('/create', controller.CreatItem)
Router.put('/update/:customerId/:restaurantId', controller.UpdateItem)

module.exports = Router
