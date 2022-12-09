'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class MenuItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      MenuItem.belongsTo(models.Restaurant, { foreignKey: 'restaurantId' })
      MenuItem.belongsTo(models.Order, { foreignKey: 'menuItemId' })
      MenuItem.belongsToMany(models.Order, {
        as: 'menu_item',
        through: models.MenuOrder,
        foreignKey: 'menuItemId'
      })
    }
  }
  MenuItem.init(
    {
      menuItemId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'order',
          key: 'id'
        }
      },
      restaurantId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'restaurant',
          key: 'id'
        }
      },
      Name: DataTypes.STRING,
      Description: DataTypes.STRING,
      image: DataTypes.STRING,
      Price: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'MenuItem',
      tableName: 'menu_item'
    }
  )
  return MenuItem
}