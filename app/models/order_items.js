module.exports = (sequelize, type) => {
  return sequelize.define('order_item', {
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
    product_id: {
      type: type.INTEGER,
      allownull: false,
      references: {
        model: 'products',
        key: 'id'
      }
    },
    order_split_id: {
      type: type.INTEGER,
      allownull: true,
      references: {
        model: 'order_splits',
        key: 'id'
      }
    },
    quantity: {
      type: type.INTEGER,
      allownull: false,
      defaultValue: 1
    }
  })
}