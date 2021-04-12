const { Router } = require('express');
const category_controller = require('../controllers/category');
const category_schema = require('../joi/category');
const joi_validator = require('../middlewares/joiValidator');

const route = Router();

route.post(
  '/',
  joi_validator(category_schema.create, 'body'),
  category_controller.create
);
route.get('/', category_controller.readAll);
route.put(
  '/:id',
  joi_validator(category_schema.id, 'params'),
  joi_validator(category_schema.update, 'body'),
  category_controller.update
);
route.delete(
  '/:id',
  joi_validator(category_schema.id, 'params'),
  category_controller.delete
);

module.exports = route;
