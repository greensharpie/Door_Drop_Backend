'use strict'
const falso = require('@ngneat/falso')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const menu_item = [...Array(5)].map(() => ({
      Name: falso.randFood(),
      Description: falso.randProductDescription(),
      image: falso.randImg(),
      Price: falso.randNumber(),
      createdAt: falso.randPastDate(),
      updatedAt: falso.randRecentDate()
    }))
    await queryInterface.bulkInsert('menu_item', menu_item)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('menu_item')
  }
}
