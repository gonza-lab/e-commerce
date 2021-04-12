const category_service = require('./category');
const { Product } = require('../models');

const create = async ({ name, price, stock, categoryId }) => {
  if (categoryId) {
    await category_service.exists(categoryId);
  }

  let productDB = (await Product.create({ name, price, stock, categoryId }))
    .dataValues;

  return productDB;
};

module.exports = { create };
