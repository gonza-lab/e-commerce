const { Router } = require('express');
const product_controller = require('../controllers/product');

const route = Router();

route.post('/', product_controller.create);

module.exports = route;
