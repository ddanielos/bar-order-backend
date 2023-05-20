const router = require('express').Router();
const { matchedData } = require('express-validator');
const { validatorRegister, validatorLogin } = require('../../validators/auth')
const { registerUser } = require('../../controllers/auth')


//TODO http://localhost:3001/api/auth/login
//TODO http://localhost:3001/api/auth/register
router.post('/', validatorRegister, registerUser)

module.exports = router;