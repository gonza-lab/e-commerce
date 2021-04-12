const { request, response } = require('express');
const product_service = require('../services/product');

const create = async (req = request, res = response, next) => {
  try {
    let data = await product_service.create(req.body);

    res.status(201).json({
      ok: true,
      data,
    });
  } catch (error) {
    next(error);
  }
};

const update = async (req = request, res = response, next) => {
  try {
    let data;

    res.status(200).json({
      ok: true,
      data,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { create, update };
