const { Product } = require('../models')

const getItems = async(req, res) => {
  const products = await Product.findAll();
  res.json(products);
}

const getItem = async(req, res) => {
  const product = await Product.findOne({
    where: { id: req.params.productId }
  });
  res.json(product);
}

const createItem = async(req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
}
const updateItem = async(req, res) => {
  await Product.update(req.body, {
    where: { id: req.params.productId }
  });
  res.json({ success: 'El parámetro ha sido modificado' });
}
const deleteItem = async(req, res) => {
  await Product.destroy({
    where: { id: req.params.productId }
  });
  res.json({success: 'Se ha eliminado el producto'});
}
module.exports = {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem
}