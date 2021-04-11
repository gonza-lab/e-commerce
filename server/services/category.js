const { NotFound } = require('../errors/errors');
const { Category } = require('../models');

const create = async ({ name, father }) => {
  let fatherCategoryDB;

  if (father) {
    fatherCategoryDB = await Category.findOne({ where: { id: father } });

    if (!fatherCategory)
      throw new NotFound('Not Found: Sent parent category cannot be found.');
  }

  let categoryDB = await Category.create({ name });

  if (fatherCategoryDB) fatherCategoryDB.addSon(categoryDB);

  return categoryDB;
};

module.exports = { create };
