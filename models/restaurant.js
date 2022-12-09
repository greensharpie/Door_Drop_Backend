'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Restaurant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Restaurant.hasMany(MenuItem, { foreignKey: 'restaurantId' })
      Restaurant.hasMany(Order, { foreignKey: 'restaurantId' })
    }
  }
  Restaurant.init(
    {
      Name: DataTypes.STRING,
      Description: DataTypes.STRING,
      image: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Restaurant',
      tableName: 'restaurant'
    }
  )
  return Restaurant
}
