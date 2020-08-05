const express = require('express');
const controller = require('../controller/users');

const router = express.Router();

router.get('/signup', controller.signup);

module.exports = router;
