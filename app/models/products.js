module.exports = (sequelize, type) => {
  return sequelize.define('product',{
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: type.STRING,
    price: type.DECIMAL(10, 2),
    category: type.ENUM('food','drink','dessert'),
    size: type.ENUM('pinta', 'media-pinta', 'botella')
  })
}