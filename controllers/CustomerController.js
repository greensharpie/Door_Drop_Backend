const { Customer } = require('../models')

const GetAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.findAll()
    res.send(customers)
  } catch (error) {
    throw error
  }
}

const GetCustomerDetails = async (req, res) => {
  try {
    const customers = await Customer.findByPk(req.params.customerId)
    res.send(customers)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllCustomers,
  GetCustomerDetails
}
