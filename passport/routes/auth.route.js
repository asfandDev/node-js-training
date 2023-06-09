const express = require('express');
const asyncHandler = require('express-async-handler');
const userCtrl = require('../controllers/users.controller');
const authCtrl = require('../controllers/auth.controller');
const { localAuthHandler } = require('../middleware/auth');

const router = express.Router();
module.exports = router;

router.post('/signup', asyncHandler(authCtrl.signup));
router.post('/login', localAuthHandler, asyncHandler(authCtrl.login));
