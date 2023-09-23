
const express = require('express');
const router = express.Router();

//controller
const {registerNext} = require('../controllers/registerWorker.controller')

router.post('/',registerNext)

module.exports = router;