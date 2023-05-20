const { User } = require('../models/');
const { matchedData } = require('express-validator');
const { encrypt, compare } = require('../utils/handlePassword')

const registerUser = async (req, res)=>{
  req = matchedData(req);
  const password = await encrypt(req.password);
  const body = {...req, password}
  const user = await User.create(body)
  res.json(user)
  /*
  Nos quedamos en esta parte, no puede ejecutarse el controlador
  */
}

module.exports = {
  registerUser,
}