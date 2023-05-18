const router = require('express').Router();

const {getItems, getItem, createItem, updateItem, deleteItem} = require('../../controllers/products')

router.get('/', getItems);

router.get('/:productId', getItem);

router.post('/', createItem);

router.put('/:productId', updateItem);

router.delete('/:productId', deleteItem);

module.exports = router;