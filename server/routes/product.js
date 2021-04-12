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
route.put(
  '/:id',
  joi_validator(product_schema.id, 'params'),
  joi_validator(product_schema.update, 'body'),
  product_controller.update
);
route.delete(
  '/:id',
  joi_validator(product_schema.id, 'params'),
  product_controller.delete
);

module.exports = route;
