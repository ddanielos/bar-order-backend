const router = require('express').Router();

const {getItems, getItem, createItem, updateItem, deleteItem} = require('../../controllers/payments')

router.get('/', getItems);

router.get('/:paymentId', getItem);

router.post('/', createItem);

router.put('/:paymentId', updateItem);

router.delete('/:paymentId', deleteItem);

module.exports = router;