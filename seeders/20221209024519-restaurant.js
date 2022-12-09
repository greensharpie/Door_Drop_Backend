'use strict'
const falso = require('@ngneat/falso')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const restaurant = [...Array(5)].map(() => ({
      Name: falso.randCompanyName(),
      Description: falso.randProductDescription(),
      image: falso.randImg(),
      createdAt: falso.randPastDate(),
      updatedAt: falso.randRecentDate()
    }))
    await queryInterface.bulkInsert('restaurant', restaurant)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('restaurant')
  }
}
