'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProductCategory.belongsTo(models.Product, { foreignKey: 'productId' });
      ProductCategory.belongsTo(models.Category, { foreignKey: 'categoryId' });
    }
  };
  ProductCategory.init({
  }, {
    sequelize,
    modelName: 'ProductCategory',
  });
  return ProductCategory;
};
