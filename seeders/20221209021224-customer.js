'use strict'
const falso = require('@ngneat/falso')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const customer = [...Array(5)].map(() => {
      const address = `${falso.randStreetAddress()} ${falso.randCity()}, ${falso.randState()}`
      return {
        FirstName: falso.randFirstName(),
        LastName: falso.randLastName(),
        email: falso.randEmail(),
        passwordDigest: falso.randPassword(),
        address: address,
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate()
      }
    })
    await queryInterface.bulkInsert('customer', customer)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('customer')
  }
}
