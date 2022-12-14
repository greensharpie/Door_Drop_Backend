const router = require('express').Router()
const controller = require('../controllers/FavoritesController')

router.get('/customer_favorites', controller.GetCustomersFavorites)
router.get('/restaurant_users', controller.GetRestaurantsWithCustomerList)
router.post(
  '/create/customer_id/:customer_id/restaurant_id/:restaurant_id',
  controller.CreateFavorite
)
router.put('/update/:customerId/:restaurantId', controller.UpdateFavorite)

module.exports = router
