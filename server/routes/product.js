const { Router } = require('express');
const product_controller = require('../controllers/product');
const product_schema = require('../joi/product');
const joi_validator = require('../middlewares/joiValidator');

const route = Router();

route.post(
  '/',
  joi_validator(product_schema.create, 'body'),
  product_controller.create
);

module.exports = route;
