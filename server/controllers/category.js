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

const readAll = async (req = request, res = response, next) => {
  try {
    const data = await category_service.readAll();

    res.status(200).json({
      ok: true,
      data,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const update = async (req = request, res = response, next) => {
  try {
    let data = await category_service.update(req.body, req.params.id);

    res.status(200).json({ ok: true, data });
  } catch (error) {
    console.log(error)
    next(error);
  }
};

module.exports = { create, readAll, update };
