const router = require('express').Router();

const {getItems, getItem, createItem, updateItem, deleteItem} = require('../../controllers/orders')

router.get('/', getItems);

router.get('/:orderId', getItem);

router.post('/', createItem);

router.put('/:orderId', updateItem);

router.delete('/:orderId', deleteItem);

module.exports = router;