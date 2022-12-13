const Router = require('express').Router()
const controller = require('../controllers/OrderController')

Router.get('/order_items', controller.getOrderItems)
Router.get('/order_items/id/:id', controller.GetOrdersById)
Router.post(
  '/add_order_item/order_id/:order_id/restaurant_id/:restaurant_id/item_id/:item_id',
  controller.AddOrderItem
)
Router.post('/customer_id/:customer_id', controller.CreateOrder)
Router.delete('/item_id/:item_id', controller.DeleteItem)
Router.delete('/order_id/:order_id', controller.DeleteOrder)

module.exports = Router
