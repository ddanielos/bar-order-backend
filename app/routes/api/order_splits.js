const router = require('express').Router();

const { OrderSplit } = require('../../../db');

router.get('/', async(req, res) => {
  const orderSplits = await OrderSplit.findAll();
  res.json(orderSplits);
});

router.post('/', async(req, res) => {
  const orderSplit = await OrderSplit.create(req.body);
  res.json(orderSplit);
});

router.put('/:orderSplitId', async(req, res) => {
  await OrderSplit.update(req.body, {
    where: { id: req.params.orderSplitId }
  });
  res.json({ success: 'El parámetro ha sido modificado' });
});

router.delete('/:orderSplitId', async(req, res) => {
  await OrderSplit.destroy({
    where: { id: req.params.orderSplitId }
  });
  res.json({success: 'Se ha eliminado el item de la orden'});
});

module.exports = router;