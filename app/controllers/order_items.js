const { OrderItem } = require('../models');

const getItems = async(req, res) => {
  const orderItems = await OrderItem.findAll();
  res.json(orderItems);
};

const getItem = async(req, res) => {
  const orderItem = await OrderItem.findOne({
    where: { id: req.params.orderItemId }
  });
  res.json(orderItem);
};

const createItem = async(req, res) => {
  const orderItem = await OrderItem.create(req.body);
  res.json(orderItem);
};

const updateItem = async(req, res) => {
  await OrderItem.update(req.body, {
    where: { id: req.params.orderItemId }
  });
  res.json({ success: 'El parámetro ha sido modificado' });
};

const deleteItem = async(req, res) => {
  await OrderItem.destroy({
    where: { id: req.params.orderItemId }
  });
  res.json({success: 'Se ha eliminado la orden'});
};

module.exports = {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem
};