const Router = require('express').Router()
const controller = require('../controllers/CustomerController')

Router.get('/', controller.GetAllCustomers)

module.exports = Router
