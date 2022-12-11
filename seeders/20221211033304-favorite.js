'use strict'
const falso = require('@ngneat/falso')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const favorites = [...Array(5)].map(() => ({
      customerId: falso.randNumber({ min: 1, max: 5 }),
      restaurantId: falso.randNumber({ min: 1, max: 5 }),
      createdAt: falso.randPastDate(),
      updatedAt: falso.randRecentDate()
    }))
    await queryInterface.bulkInsert('favorites', favorites)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('favorites')
  }
}
