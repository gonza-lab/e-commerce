const errors = require('../errors/errors');
const { Category } = require('../models');

const exists = async (id) => {
  let categoryDB = await Category.findOne({ where: { id } });

  if (!categoryDB)
    throw new errors.NotFound('Not Found: Sent category cannot be found.');

  return categoryDB;
};

const create = async ({ name, father }) => {
  if (father) {
    await exists(father);
  }

  let categoryDB = await Category.create({ name, fatherId: father });

  return categoryDB.dataValues;
};

const readAll = async () =>
  await Category.findAll({ include: ['father', 'son'] });

const update = async ({ name, father }, id) => {
  console.log(id)
  await exists(id);

  if (father) {
    await exists(father);
  }

  await Category.update({ name, fatherId: father }, { where: { id } });

  return (await Category.findOne({ where: { id } })).dataValues;
};

const remove = async (id) => {
  await exists(id);
  await Category.destroy({ where: { id } });
};

module.exports = { create, readAll, update, delete: remove, exists };
