'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class MenuOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MenuOrder.init(
    {
      orderId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'orders',
          key: 'id'
        }
      },
      menuItemId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'menu_item',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'MenuOrder',
      tableName: 'menu_order'
    }
  )
  return MenuOrder
}
