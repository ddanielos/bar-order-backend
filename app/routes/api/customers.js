const router = require('express').Router();

const { Customer } = require('../../../db');

router.get('/', async(req, res) => {
  const customers = await Customer.findAll();
  res.json(customers);
});

router.post('/', async(req, res) => {
  const customer = await Customer.create(req.body);
  res.json(customer);
});

router.put('/:customerId', async(req, res) => {
  await Customer.update(req.body, {
    where: { id: req.params.customerId }
  });
  res.json({ success: 'El parámetro ha sido modificado' });
});

router.delete('/:customerId', async(req, res) => {
  await Customer.destroy({
    where: { id: req.params.customerId }
  });
  res.json({success: 'Se ha eliminado el cliente'});
});

module.exports = router;