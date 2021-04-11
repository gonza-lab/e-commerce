const { request, response } = require("express");

const create = (req = request, res = response, next) => {
  let code = 201;
  let resContent = { ok: true };

  try {
    //service

    res.status(code).json(resContent);
  } catch (error) {
    next(error);
  }
}

module.exports = { create };