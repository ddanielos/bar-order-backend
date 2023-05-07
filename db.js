require('dotenv').config();
const Sequelize = require('sequelize');

const CustomersModel = require('./app/models/customers');
const ProductsModel = require('./app/models/products');

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

const Customers = CustomersModel(sequelize, Sequelize);
const Products = ProductsModel(sequelize, Sequelize);

sequelize.sync({force: false})
  .then(()=>{
    console.log('Tablas sincronizadas')
  })

module.exports = {
  Customers,
  Products
}
