const express = require("express");
const router = express.Router();

const userCtrl = require('../controllers/users.controller')


router.get("/hello", (req, res) => {
  res.send(`Hello ${req.user}`);
});

router.post(
  "/users",
  userCtrl.createUser
);

module.exports = router;
