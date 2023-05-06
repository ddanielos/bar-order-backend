module.exports = (sequelize, type) => {
  return sequelize.define('customers',{
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: type.STRING
  })
}