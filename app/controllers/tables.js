const { Table } = require('../models');

const getItems = async(req, res) => {
  const tables = await Table.findAll();
  res.json(tables);
};

const getItem = async(req, res) => {
  const table = await Table.findOne({
    where: { id: req.params.tableId }
  });
  res.json(table);
};

const createItem = async(req, res) => {
  const table = await Table.create(req.body);
  res.json(table);
};

const updateItem = async(req, res) => {
  await Table.update(req.body, {
    where: { id: req.params.tableId }
  });
  res.json({ success: 'El parámetro ha sido modificado' });
};

const deleteItem = async(req, res) => {
  await Table.destroy({
    where: { id: req.params.tableId }
  });
  res.json({success: 'Se ha eliminado la mesa'});
};

module.exports = {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem
};