const { Customer } = require('../models');

const getItems = async(req, res) => {
  const customers = await Customer.findAll();
  res.json(customers);
};

const getItem = async(req, res) => {
  const customer = await Customer.findOne({
    where: { id: req.params.customerId }
  });
  res.json(customer);
};

const createItem = async(req, res) => {
  const customer = await Customer.create(req.body);
  res.json(customer);
};

const updateItem = async(req, res) => {
  await Customer.update(req.body, {
    where: { id: req.params.customerId }
  });
  res.json({ success: 'El parámetro ha sido modificado' });
};

const deleteItem = async(req, res) => {
  await Customer.destroy({
    where: { id: req.params.customerId }
  });
  res.json({success: 'Se ha eliminado el cliente'});
};

module.exports = {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem
}