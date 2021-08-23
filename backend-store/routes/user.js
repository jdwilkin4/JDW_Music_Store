const express = require('express');
const router = express.Router();
const { userPage } = require('../controllers/user');

router.get('/', userPage)

module.exports = router;