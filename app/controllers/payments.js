const { Payment } = require('../models');

const getItems = async(req, res) => {
  const payments = await Payment.findAll();
  res.json(payments);
};

const getItem = async(req, res) => {
  const payment = await Payment.findOne({
    where: { id: req.params.paymentId }
  });
  res.json(payment);
};

const createItem = async(req, res) => {
  const payment = await Payment.create(req.body);
  res.json(payment);
};

const updateItem = async(req, res) => {
  await Payment.update(req.body, {
    where: { id: req.params.paymentId }
  });
  res.json({ success: 'El parámetro ha sido modificado' });
};

const deleteItem = async(req, res) => {
  await Payment.destroy({
    where: { id: req.params.paymentId }
  });
  res.json({success: 'Se ha eliminado el pago'});
};

module.exports = {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem
}