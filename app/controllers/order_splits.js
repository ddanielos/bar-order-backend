const { OrderSplit } = require('../models');

const getItems = async(req, res) => {
  const orderSplits = await OrderSplit.findAll();
  res.json(orderSplits);
};

const getItem = async(req, res) => {
  const orderSplit = await OrderSplit.findOne({
    where: { id: req.params.orderSplitId }
  });
  res.json(orderSplit);
};

const createItem = async(req, res) => {
  const orderSplit = await OrderSplit.create(req.body);
  res.json(orderSplit);
};

const updateItem = async(req, res) => {
  await OrderSplit.update(req.body, {
    where: { id: req.params.orderSplitId }
  });
  res.json({ success: 'El parámetro ha sido modificado' });
};

const deleteItem = async(req, res) => {
  await OrderSplit.destroy({
    where: { id: req.params.orderSplitId }
  });
  res.json({success: 'Se ha eliminado el item de la orden'});
};

module.exports = {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem
}