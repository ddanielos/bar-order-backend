const router = require('express').Router();

const { Payment } = require('../../../db');

router.get('/', async(req, res) => {
  const payments = await Payment.findAll();
  res.json(payments);
});

router.post('/', async(req, res) => {
  const payment = await Payment.create(req.body);
  res.json(payment);
});

router.put('/:paymentId', async(req, res) => {
  await Payment.update(req.body, {
    where: { id: req.params.paymentId }
  });
  res.json({ success: 'El parámetro ha sido modificado' });
});

router.delete('/:paymentId', async(req, res) => {
  await Payment.destroy({
    where: { id: req.params.paymentId }
  });
  res.json({success: 'Se ha eliminado el pago'});
});

module.exports = router;