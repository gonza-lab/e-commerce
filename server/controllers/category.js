const { request, response } = require('express');
const category_service = require('../services/category');

const create = async (req = request, res = response, next) => {
  try {
    const data = await category_service.create(req.body);

    res.status(201).json({
      ok: true,
      data,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { create };
