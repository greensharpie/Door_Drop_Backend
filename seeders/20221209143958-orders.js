'use strict'
const falso = require('@ngneat/falso')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const orders = [...Array(5)].map(() => ({
      OrderedDate: falso.randPastDate(),
      PreparedDate: falso.randSoonDate(),
      DeliveredDate: falso.randFutureDate(),
      createdAt: falso.randPastDate(),
      updatedAt: falso.randRecentDate()
    }))
    await queryInterface.bulkInsert('orders', orders)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('orders')
  }
}
