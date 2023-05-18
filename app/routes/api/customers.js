const router = require('express').Router();

const {getItems, getItem, createItem, updateItem, deleteItem} = require('../../controllers/customers')

router.get('/', getItems);

router.get('/:customerId', getItem);

router.post('/', createItem);

router.put('/:customerId', updateItem);

router.delete('/:customerId', deleteItem);

module.exports = router;