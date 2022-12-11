const Router = require('express').Router()
const controller = require('../controllers/CustomerController')

Router.get('/', controller.GetAllCustomers)
Router.get('/:customerId', controller.GetCustomerDetails)
Router.post('/', controller.CreateCustomer)
Router.put('/:customer_id', controller.UpdateCustomer)
Router.delete('/:customer_id', controller.DeleteCustomer)

module.exports = Router
