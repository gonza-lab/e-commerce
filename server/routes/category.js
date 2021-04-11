const { Router } = require('express');
const category_controller = require('../controllers/category');

const route = Router();

route.post('/', category_controller.create);

module.exports = route;
