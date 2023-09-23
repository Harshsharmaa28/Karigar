

const express = require('express')

const router = express.Router();

const ctrlr = require('../controllers/login.controller');


router.get('/',ctrlr);

module.exports = router;