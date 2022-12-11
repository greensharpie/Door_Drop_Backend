'use strict'
const falso = require('@ngneat/falso')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const items = [...Array(5)].map(() => ({
      name: falso.randFood(),
      description: falso.randProductDescription(),
      image: falso.randImg(),
      price: falso.randNumber(),
      customerId: falso.randNumber({ min: 1, max: 5 }),
      restaurantId: falso.randNumber({ min: 1, max: 5 }),
      createdAt: falso.randPastDate(),
      updatedAt: falso.randRecentDate()
    }))
    await queryInterface.bulkInsert('items', items)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('items')
  }
}
