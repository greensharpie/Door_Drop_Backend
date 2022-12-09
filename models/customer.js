'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Customer.hasOne(models.Order, { foreignKey: 'customerId' })
    }
  }
  Customer.init(
    {
      FirstName: DataTypes.STRING,
      LastName: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      passwordDigest: {
        type: DataTypes.STRING,
        allowNull: false
      },
      address: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Customer',
      tableName: 'customer'
    }
  )
  return Customer
}
