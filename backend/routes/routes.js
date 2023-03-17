const express =require('express');
const router = express.Router()

const register = require('../controller/register');
const login = require('../controller/login');


router.post('/login', login.login)
router.post('/register', register.register)

module.exports = router 