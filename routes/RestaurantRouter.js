const Router = require('express').Router()
const controller = require('../controllers/RestaurantController')

Router.get('/get_all', controller.GetAllRestaurants)

module.exports = Router
