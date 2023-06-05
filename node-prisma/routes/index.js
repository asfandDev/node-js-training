const express = require("express");
const router = express.Router();

const userRoutes = require("./users.route");

router.get("/hello", (req, res) => {
  res.send(`Hello ${req.user}`);
});

router.use("/users", userRoutes);

module.exports = router;
