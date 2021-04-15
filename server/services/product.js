const category_service = require('./category');
const { Product } = require('../models');
const errors = require('../errors/errors');

const exists = async (id) => {
  let productDB = await Product.findOne({ where: { id } });

  if (!productDB)
    throw new errors.NotFound('Not Found: Sent product cannot be found.');

  return productDB;
};

const create = async ({ name, price, stock, categoryId, images }) => {
  if (categoryId) {
    await category_service.exists(categoryId);
  }

  let productDB = await Product.create({ name, price, stock, categoryId });

  return productDB.dataValues;
};

const update = async ({ name, price, stock, categoryId }, id) => {
  await exists(id);
  if (categoryId) await category_service.exists(categoryId);

  await Product.update({ name, price, stock, categoryId }, { where: { id } });
  let productDB = (await Product.findOne({ where: { id } })).dataValues;

  return productDB;
};

const remove = async (id) => {
  await exists(id);

  await Product.destroy({ where: { id } });
};

module.exports = { create, update, delete: remove };
