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

module.exports = {
  getOrderItems
}
