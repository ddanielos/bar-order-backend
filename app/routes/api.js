const router = require('express').Router();

const apiProductRouter = require('./api/products');
const apiCustomerRouter = require('./api/customers');
const apiTableRouter = require('./api/tables');
const apiOrderRouter = require('./api/orders');
const apiOrderSplitRouter = require('./api/order_splits');
const apiOrderItemRouter = require('./api/order_items');
const apiPaymentRouter = require('./api/payments');

router.use('/products', apiProductRouter);
router.use('/customers', apiCustomerRouter);
router.use('/tables', apiTableRouter);
router.use('/orders', apiOrderRouter);
router.use('/ordersplits', apiOrderSplitRouter);
router.use('/orderItems', apiOrderItemRouter);
router.use('/payments', apiPaymentRouter);

module.exports = router;