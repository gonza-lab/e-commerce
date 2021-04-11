const errors = require('../errors/errors');
const { Category } = require('../models');

const create = async ({ name, father }) => {
  let fatherCategoryDB;

  if (father) {
    fatherCategoryDB = await Category.findOne({ where: { id: father } });

    if (!fatherCategoryDB)
      throw new errors.NotFound('Not Found: Sent parent category cannot be found.');
  }

  let categoryDB = await Category.create({ name, fatherId: father });

  return categoryDB.dataValues;
};

module.exports = { create };
