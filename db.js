require('dotenv').config();
const Sequelize = require('sequelize');

const CustomerModel = require('./app/models/customers');
const ProductModel = require('./app/models/products');
const TableModel = require('./app/models/tables');
const OrderModel = require('./app/models/orders');
const OrderSplitModel = require('./app/models/order_splits');
const OrderItemModel = require('./app/models/order_items');
const PaymentModel = require('./app/models/payments');

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  }
);

async function testConnection(){
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch(error){
    console.log('Unnable to connect to the database.', error);
  }
}
testConnection();

const Customer = CustomerModel(sequelize, Sequelize);
const Product = ProductModel(sequelize, Sequelize);
const Table = TableModel(sequelize, Sequelize);
const Order = OrderModel(sequelize, Sequelize);
const OrderSplit = OrderSplitModel(sequelize, Sequelize);
const OrderItem = OrderItemModel(sequelize, Sequelize);
const Payment = PaymentModel(sequelize, Sequelize);

sequelize.sync({force: false})
  .then(()=>{
    console.log('Tablas sincronizadas')
  })

module.exports = {
  Customer,
  Product,
  Table,
  Order,
  OrderSplit,
  OrderItem,
  Payment
}
