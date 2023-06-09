const express = require('express');
const asyncHandler = require('express-async-handler');
const userCtrl = require('../controllers/users.controller');
const { jwtAuthHandler } = require('../middleware/auth');

const router = express.Router();
module.exports = router;

router.post('/', asyncHandler(userCtrl.addUser));
router.get('/', jwtAuthHandler ,asyncHandler(userCtrl.getUsers));
router.put('/:id', asyncHandler(userCtrl.updateUser));
router.delete('/:id', asyncHandler(userCtrl.deleteUser));
