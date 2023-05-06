const Sequelize = require('sequelize');
require('dotenv').config();

const config = require('./config/config.json')["development"];

console.log(config.password);

/*
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
});
*/

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
});

async function testConnection(){
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch(error){
    console.log('Unnable to connect to the database.', error);
  }
}

testConnection();

module.exports = sequelize;