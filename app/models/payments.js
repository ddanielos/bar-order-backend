module.exports = (sequelize, type) => {
  return sequelize.define('payment', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    order_id: {
      type: type.INTEGER,
      allowNull: true,
      references: {
        model: 'orders',
        key: 'id'
      }
    },
    order_split_id: {
      type: type.INTEGER,
      allowNull: true,
      references: {
        model: 'order_splits',
        key: 'id'
      }
    },
    amount: type.DECIMAL(10, 2),
    payment_method: type.ENUM('efectivo', 'tarjeta', 'digital')
  })
}