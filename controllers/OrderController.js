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

const CreateOrder = async (req, res) => {
  try {
    const customerId = parseInt(req.params.customer_id)
    let itemBody = {
      customerId
    }
    const createdOrder = await Order.create(itemBody)
    res.send(createdOrder)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const DeleteItem = async (req, res) => {
  try {
    const itemId = parseInt(req.params.item_id)
    await MenuItem.destroy({ where: { id: itemId } })
    res.send({ message: `Deleted item with and id of ${itemId}` })
  } catch (error) {
    throw error
  }
}

const DeleteOrder = async (req, res) => {
  try {
    const orderId = parseInt(req.params.order_id)
    await Cart.destroy({ where: { id: orderId } })
    res.send({ message: `Deleted order with and id of ${orderId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  getOrderItems,
  GetOrdersById,
  AddOrderItem,
  CreateOrder,
  DeleteItem,
  DeleteOrder
}
