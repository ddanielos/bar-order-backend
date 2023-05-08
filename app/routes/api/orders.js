const router = require('express').Router();

const { Order } = require('../../../db');

router.get('/', async(req, res) => {
  const orders = await Order.findAll();
  res.json(orders);
});

router.post('/', async(req, res) => {
  const order = await Order.create(req.body);
  res.json(order);
});

router.put('/:orderId', async(req, res) => {
  await Order.update(req.body, {
    where: { id: req.params.orderId }
  });
  res.json({ success: 'El parámetro ha sido modificado' });
});

router.delete('/:orderId', async(req, res) => {
  await Order.destroy({
    where: { id: req.params.orderId }
  });
  res.json({success: 'Se ha eliminado la orden'});
});

module.exports = router;