module.exports = (sequelize, type) => {
  return sequelize.define('order',{
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    table_id: {
      type: type.INTEGER,
      allowNull: false,
      references: {
        model: 'tables',
        key: 'id'
      }
    },
    customer_id: {
      type: type.INTEGER,
      allowNull: false,
      references: {
        model: 'customers',
        key: 'id'
      }
    },
    status: {
      type: type.ENUM('abierto','cerrado'),
      allowNull: false,
      defaultValue: 'abierto'
    }
  })
}