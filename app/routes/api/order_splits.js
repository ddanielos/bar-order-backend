const router = require('express').Router();

const {getItems, getItem, createItem, updateItem, deleteItem} = require('../../controllers/order_splits')

router.get('/', getItems);

router.get('/:orderSplitId', getItem);

router.post('/', createItem);

router.put('/:orderSplitId', updateItem);

router.delete('/:orderSplitId', deleteItem);

module.exports = router;