const Router = require('express').Router()
const controller = require('../controllers/CustomerController')

Router.get('/', controller.GetAllCustomers)
Router.get('/:customerId', controller.GetCustomerDetails)

module.exports = Router
