const Router = require('express').Router()
const controller = require('../controllers/CustomerController')

Router.get('/get_all', controller.GetAllCustomers)
Router.get('/id/:id', controller.GetCustomerById)
Router.post('/new_customer', controller.CreateCustomer)
Router.put('/:customer_id', controller.UpdateCustomer)
Router.delete('/:customer_id', controller.DeleteCustomer)

module.exports = Router
