const { Order } = require('../models');

const getItems = async(req, res) => {
  const orders = await Order.findAll();
  res.json(orders);
};

const getItem = async(req, res) => {
  const order = await Order.findOne({
    where: { id: req.params.orderId }
  });
  res.json(order);
};

const createItem = async(req, res) => {
  const order = await Order.create(req.body);
  res.json(order);
};

const updateItem = async(req, res) => {
  await Order.update(req.body, {
    where: { id: req.params.orderId }
  });
  res.json({ success: 'El parámetro ha sido modificado' });
};

const deleteItem = async(req, res) => {
  await Order.destroy({
    where: { id: req.params.orderId }
  });
  res.json({success: 'Se ha eliminado la orden'});
};

module.exports = {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem
}