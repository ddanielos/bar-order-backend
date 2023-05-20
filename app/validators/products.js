const { check } = require("express-validator");
const { validateResult } = require('../utils/handleValidator')

const validatorGetId = [
  check("productId").exists().notEmpty().isInt(),
  (req, res, next) => {
    return validateResult(req, res, next)
  }
];

const validatorCreateItem = [
  check("name").exists().notEmpty(),
  check("price").exists().notEmpty().isFloat(),
  check("category").exists().notEmpty(),
  check("size").exists().notEmpty(),
  (req, res, next) => {
    return validateResult(req, res, next)
  }
];

module.exports = {
  validatorGetId,
  validatorCreateItem
}
