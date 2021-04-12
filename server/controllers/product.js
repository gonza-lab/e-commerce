const { request, response } = require('express');

const create = async (req = request, res = response, next) => {
  try {
    let data;

    res.status(201).json({
      ok: true,
      data,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { create };
