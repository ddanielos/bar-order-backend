const router = require('express').Router();

const { Product } = require('../../../db');

router.get('/', async(req, res) => {
  const products = await Product.findAll();
  res.json(products);
});

router.post('/', async(req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
});

router.put('/:productId', async(req, res) => {
  await Product.update(req.body, {
    where: { id: req.params.productId }
  });
  res.json({ success: 'El parámetro ha sido modificado' });
});

router.delete('/:productId', async(req, res) => {
  await Product.destroy({
    where: { id: req.params.productId }
  });
  res.json({success: 'Se ha eliminado el producto'});
});

module.exports = router;