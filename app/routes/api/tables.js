const router = require('express').Router();

const {getItems, getItem, createItem, updateItem, deleteItem} = require('../../controllers/tables')

router.get('/', getItems);

router.get('/:tableId', getItem);

router.post('/', createItem);

router.put('/:tableId', updateItem);

router.delete('/:tableId', deleteItem);

module.exports = router;