const category_service = require('./category');
const { Product } = require('../models');

const exists = async (id) => {
  let productDB = await Product.findOne({ where: { id } });

  if (!productDB)
    throw new errors.NotFound('Not Found: Sent product cannot be found.');

  return productDB;
};

const create = async ({ name, price, stock, categoryId }) => {
  if (categoryId) {
    await category_service.exists(categoryId);
  }

  let productDB = (await Product.create({ name, price, stock, categoryId }))
    .dataValues;

  return productDB;
};

const update = async ({ name, price, stock, categoryId }, id) => {
  await exists(id);
  if (categoryId) await category_service.exists(categoryId);

  await Product.update({ name, price, stock, categoryId }, { where: { id } });
  let productDB = (await Product.findOne({ where: { id } })).dataValues;

  return productDB;
};

module.exports = { create, update };
