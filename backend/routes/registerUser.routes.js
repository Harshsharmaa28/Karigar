
const express = require('express')

// const checkAuth = middleware to check auth
const router =  express.Router();
const ctrl = require('../controllers/registerUser.controller')
// const {registerUser , walkUser} = require('../controllers/registerUser.controller');

router.post('/',ctrl)

module.exports = router;
