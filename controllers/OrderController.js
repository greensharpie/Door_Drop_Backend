const { Order, MenuItem } = require('../models')

const getOrderItems = async (req, res) => {
  try {
    const orders = await Order.findAll({
      include: [
        {
          model: MenuItem,
          as: 'order_items'
        }
      ]
    })
    res.send(orders)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const GetOrdersById = async (req, res) => {
  try {
    const orders = await Order.findByPk(req.params.id, {
      include: [{ model: MenuItem, as: 'order_items' }]
    })
    res.send(orders)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const AddOrderItem = async (req, res) => {
  try {
    const order_items = await MenuItem.findByPk(req.params.item_id)
    const orderId = parseInt(req.params.order_id)
    const restaurantId = parseInt(req.params.restaurant_id)

    let orderBody = {
      name: order_items.name,
      price: order_items.price,
      description: order_items.description,
      image: order_items.image
    }
    const addItemToOrder = await MenuItem.create(orderBody)
    res.send(addItemToOrder)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getOrderItems,
  GetOrdersById,
  AddOrderItem
}
