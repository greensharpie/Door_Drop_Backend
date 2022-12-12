const { Customer, MenuItem, Order } = require('../models')

const GetAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.findAll()
    res.send(customers)
  } catch (error) {
    throw error
  }
}

const GetCustomerById = async (req, res) => {
  try {
    const customers = await Customer.findByPk(req.params.id)
    res.send(customers)
  } catch (error) {
    throw error
  }
}

const CreateCustomer = async (req, res) => {
  try {
    const newCustomer = await Customer.create(req.body)
    res.send(newCustomer)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const UpdateCustomer = async (req, res) => {
  try {
    let customerId = parseInt(req.params.customer_id)
    let UpdateCustomer = await Customer.update(req.body, {
      where: { id: customerId },
      returning: true
    })
    res.send(UpdateCustomer)
  } catch (error) {
    throw error
  }
}

const getCustomerOrder = async (req, res) => {
  try {
    const customer = await Customer.findAll({
      include: [
        {
          model: Order,
          as: 'customer_order',
          include: [
            {
              model: MenuItem,
              as: 'order_items'
            }
          ]
        }
      ]
    })
    res.send(customer)
  } catch (error) {
    throw error
  }
}

const DeleteCustomer = async (req, res) => {
  try {
    let customerId = parseInt(req.params.id)
    await Customer.destroy({ where: { id: customerId } })
    res.send({ message: `Deleted customer with an id of ${customerId}` })
  } catch (error) {
    throw error
  }
}

const RegisterCustomer = async (req, res) => {
  try {
    const { firstName, email, password } = req.body
    console.log(password)
    let passwordDigest = await middleware.hashPassword(password)
    const customer = await Customer.create({
      firstName,
      email,
      passwordDigest
    })
    res.send(customer)
  } catch (error) {
    res.status(500).send({ err: error })
  }
}

const LoginCustomer = async (req, res) => {
  try {
    const customer = await Customer.findOne({
      where: {
        email: req.body.email
      },
      raw: true
    })
    if (
      customer &&
      (await middleware.comparePassword(
        customer.passwordDigest,
        req.body.password
      ))
    ) {
      let payload = {
        id: customer.id,
        email: customer.email
      }
      let token = middleware.createToken(payload)
      return res.send({ customer: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}

const CheckSession = async (req, res) => {
  console.log(res.locals)
  const { payload } = res.locals
  res.send(payload)
}

const UpdatePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body
    const customer = await Customer.findByPk(req.params.customer_id)
    if (
      customer &&
      (await middleware.comparePassword(
        customer.dataValues.passwordDigest,
        oldPassword
      ))
    ) {
      let passwordDigest = await middleware.hashPassword(newPassword)
      await customer.update({ passwordDigest })
      return res.send({ status: 'Ok', payload: customer })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {}
}

module.exports = {
  GetAllCustomers,
  GetCustomerById,
  CreateCustomer,
  UpdateCustomer,
  DeleteCustomer,
  getCustomerOrder,
  RegisterCustomer,
  LoginCustomer,
  CheckSession,
  UpdatePassword
}
