'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsTo(models.Customer, { foreignKey: 'customerId' })
      Order.belongsTo(models.Restaurant, { foreignKey: 'restaurantId' })
      Order.belongsToMany(models.MenuItem, {
        foreignKey: 'orderId',
        as: 'order_item',
        through: models.MenuOrder
      })
    }
  }
  Order.init(
    {
      restaurantId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Restaraunt',
          key: 'id'
        }
      },
      customerId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'customer',
          key: 'id'
        }
      },
      OrderedDate: DataTypes.DATE,
      PreparedDate: DataTypes.DATE,
      DeliveredDate: DataTypes.DATE
    },
    {
      sequelize,
      modelName: 'Order',
      tableName: 'order'
    }
  )
  return Order
}
