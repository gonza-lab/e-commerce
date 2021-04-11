const { request, response } = require('express');
const category_service = require('../services/category');

const create = async (req = request, res = response, next) => {
  let code = 201;
  let resContent = { ok: true };

  try {
    await category_service.create(req.body);

    res.status(code).json(resContent);
  } catch (error) {
    next(error)
  }
};

module.exports = { create };
