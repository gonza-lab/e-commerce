'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Products', [
      {
	name: 'PlayStation 5',
	price: 100000,
	stock: 10,
	categoryId: 1,
	createdAt: new Date(),
	updatedAt: new Date(),
      },
      {
	name: 'Xbox Series X',
	price: 100000,
	stock: 10,
	categoryId: 1,
	createdAt: new Date(),
	updatedAt: new Date(),
      },
      {
	name: 'PlayStation 4',
	price: 60000,
	stock: 20,
	categoryId: 1,
	createdAt: new Date(),
	updatedAt: new Date(),
      },
      {
	name: 'Xbox One',
	price: 60000,
	stock: 20,
	categoryId: 1,
	createdAt: new Date(),
	updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
