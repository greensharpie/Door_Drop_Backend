'use strict'
const falso = require('@ngneat/falso')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const restaurants = [...Array(5)].map(() => ({
      name: falso.randCompanyName(),
      description: falso.randProductDescription(),
      image: falso.randImg(),
      createdAt: falso.randPastDate(),
      updatedAt: falso.randRecentDate()
    }))
    await queryInterface.bulkInsert('restaurants', restaurants)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('restaurants')
  }
}
