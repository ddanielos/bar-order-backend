const router = require('express').Router();

const {getItems, getItem, createItem, updateItem, deleteItem} = require('../../controllers/order_items')

router.get('/', getItems);

router.get('/:orderItemId', getItem);

router.post('/', createItem);

router.put('/:orderItemId', updateItem);

router.delete('/:orderItemId', deleteItem);

module.exports = router;