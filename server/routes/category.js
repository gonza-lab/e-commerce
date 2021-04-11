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

module.exports = route;
