const express =require('express');
const router = express.Router()

const register = require('../controller/register');
const login = require('../controller/login');
const doc = require('../controller/doc');


router.post('/login', login.login)
router.post('/register', register.register)
router.post('/doc', doc.doc)
router.get('/getdoc', doc.getdoc)

module.exports = router 