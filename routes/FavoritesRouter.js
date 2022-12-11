const router = require('express').Router()
const controller = require('../controllers/FavoritesController')

router.get('/customer_favorites', controller.GetCustomersFavorites)
router.get('/restaurant_users', controller.GetRestaurantsWithCustomerList)
router.post('/create', controller.CreateFavorite)
router.put('/update/:customerId/:restaurantId', controller.UpdateFavorite)

module.exports = router
