module.exports = (sequelize, type) => {
  return sequelize.define('user',{
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: type.STRING,
    email: type.STRING,
    password: type.STRING,
    role: {
      type: type.ENUM('user', 'admin'),
      allowNull: false,
      defaultValue: 'user'
    }
  })
}