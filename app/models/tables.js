module.exports = (sequelize, type) => {
  return sequelize.define('table',{
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: type.STRING
  })
}