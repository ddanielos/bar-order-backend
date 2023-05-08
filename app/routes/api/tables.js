const router = require('express').Router();

const { Table } = require('../../../db');

router.get('/', async(req, res) => {
  const tables = await Table.findAll();
  res.json(tables);
});

router.post('/', async(req, res) => {
  const table = await Table.create(req.body);
  res.json(table);
});

router.put('/:tableId', async(req, res) => {
  await Table.update(req.body, {
    where: { id: req.params.tableId }
  });
  res.json({ success: 'El parámetro ha sido modificado' });
});

router.delete('/:tableId', async(req, res) => {
  await Table.destroy({
    where: { id: req.params.tableId }
  });
  res.json({success: 'Se ha eliminado la mesa'});
});

module.exports = router;