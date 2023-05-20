const router = require('express').Router();

const { validatorGetId, validatorCreateItem } = require('../../validators/products')
const { getItems, getItem, createItem, updateItem, deleteItem } = require('../../controllers/products')

router.get('/', getItems);

router.get('/:productId', validatorGetId , getItem);

router.post('/', validatorCreateItem, createItem);

router.put('/:productId', validatorGetId, validatorCreateItem, updateItem);

router.delete('/:productId', validatorGetId, deleteItem);

module.exports = router;