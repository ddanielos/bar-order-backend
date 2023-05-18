const Sequelize = require('sequelize');
const sequelize = require('../config/database')

const ProductModel = require('../models/products');
const CustomerModel = require('../models/customers');
const TableModel = require('../models/tables');
const OrderModel = require('../models/orders');
const OrderSplitModel = require('../models/order_splits');
const OrderItemModel = require('../models/order_items');
const PaymentModel = require('../models/payments');

const Product = ProductModel(sequelize, Sequelize);
const Customer = CustomerModel(sequelize, Sequelize);
const Table = TableModel(sequelize, Sequelize);
const Order = OrderModel(sequelize, Sequelize);
const OrderSplit = OrderSplitModel(sequelize, Sequelize);
const OrderItem = OrderItemModel(sequelize, Sequelize);
const Payment = PaymentModel(sequelize, Sequelize);

const models = {
  Product,
  Customer,
  Table,
  Order,
  OrderSplit,
  OrderItem,
  Payment
}

module.exports = models;