const { Restaurant, Favorite, Customer } = require('../models')

const CreateFavorite = async (req, res) => {
  try {
    // const favorite = await Favorite.create(req.body)
    // res.send(favorite)
    const customerId = parseInt(req.params.customer_id)
    const restaurantId = parseInt(req.params.restaurant_id)

    let itemBody = {
      customerId,
      restaurantId
    }
    const addToFavorite = await Favorite.create(itemBody)
    res.send(addToFavorite)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const UpdateFavorite = async (req, res) => {
  try {
    const updateFavorite = await Favorite.update(
      { ...req.body },
      {
        where: {
          customerId: req.params.customerId,
          restaurantId: req.params.restaurantId
        },
        returning: true
      }
    )
    res.send(updateFavorite)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const GetCustomersFavorites = async (req, res) => {
  try {
    const customer = await Customer.findAll({
      include: [{ model: Restaurant, as: 'customer_favorites' }]
    })
    res.send(customer)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const GetRestaurantsWithCustomerList = async (req, res) => {
  try {
    const restaurant = await Restaurant.findAll({
      include: [{ model: Customer, as: 'restaurant_customers' }]
    })
    res.send(restaurant)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  CreateFavorite,
  UpdateFavorite,
  GetCustomersFavorites,
  GetRestaurantsWithCustomerList
}
