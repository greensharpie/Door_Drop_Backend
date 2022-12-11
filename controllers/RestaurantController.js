const { Restaurant, MenuItem } = require('../models')

const GetAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.findAll({
      include: [
        {
          model: MenuItem,
          as: 'restaurant_items'
        }
      ]
    })
    res.send(restaurants)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllRestaurants
}
