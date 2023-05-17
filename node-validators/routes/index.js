const express = require("express");
const schemaValidator = require("../utils");
const userSchema = require("../validators/user.validator.js");
const router = express.Router();

const userCtrl = require('../controllers/users.controller')


router.get("/hello", (req, res) => {
  res.send(`Hello ${req.user}`);
});

router.post(
  "/users",
  (req, res, next) => schemaValidator(req, res, next ,userSchema),
  userCtrl.createUser
);

module.exports = router;
