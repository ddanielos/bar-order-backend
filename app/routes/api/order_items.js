const router = require('express').Router();

const { OrderItem } = require('../../../db');

router.get('/', async(req, res) => {
  const orderItems = await OrderItem.findAll();
  res.json(orderItems);
});

router.post('/', async(req, res) => {
  const orderItem = await OrderItem.create(req.body);
  res.json(orderItem);
});

router.put('/:orderItemId', async(req, res) => {
  await OrderItem.update(req.body, {
    where: { id: req.params.orderItemId }
  });
  res.json({ success: 'El parámetro ha sido modificado' });
});

router.delete('/:orderItemId', async(req, res) => {
  await OrderItem.destroy({
    where: { id: req.params.orderItemId }
  });
  res.json({success: 'Se ha eliminado la orden'});
});

module.exports = router;