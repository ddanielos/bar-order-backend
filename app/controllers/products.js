const { matchedData } = require('express-validator');
const { Product } = require('../models');
const { handleHttpError } = require('../utils/handleError');

const getItems = async(req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    handleHttpError(res, "ERROR_GET_ITEMS", 403)
  }
}

const getItem = async(req, res) => {
  try {
    req = matchedData(req);
    const { productId } = req
    const product = await Product.findOne({
      where: { id: productId }
    });
    res.json(product);
  } catch (error) {
    handleHttpError(res, "ERROR_GET_ITEM", 403)
  }
}

const createItem = async(req, res) => {
  try {
    req = matchedData(req)
    const product = await Product.create(req);
    res.json(product);
  } catch (error) {
    handleHttpError(res, "ERROR_CREATE_ITEM", 403)
  }
}

const updateItem = async(req, res) => {
  try {
    req = matchedData(req)
    const { productId } = req
    await Product.update(req, {
      where: { id: productId }
    });
    res.json({ success: 'El parámetro ha sido modificado' });
  } catch (error) {
    handleHttpError(res, "ERROR_UPDATE_ITEM", 403)
  }
}

const deleteItem = async(req, res) => {
  try {
    req = matchedData(req)
    const { productId } = req
    await Product.destroy({
      where: { id: productId }
    });
    res.json({success: 'Se ha eliminado el producto'});
  } catch (error) {
    handleHttpError(res, "ERROR_DELETE_ITEM", 403)
  }
}

module.exports = {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem
}