module.exports = (sequelize, type) => {
  return sequelize.define('order_splits',{
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    order_id: {
      type: type.INTEGER,
      allownull: false,
      references: {
        model: 'orders',
        key: 'id'
      }
    },
    customer_id: {
      type: type.INTEGER,
      allownull: false,
      references: {
        model: 'customers',
        key: 'id'
      }
    }
  })
}