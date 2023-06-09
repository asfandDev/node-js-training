const express = require("express");
const router = express.Router();

const userRoutes = require("./users.route");

const authRoutes = require("./auth.route");

router.get("/health", (req, res) => {
  res.status(200).send(`working`);
});

router.use('/users', userRoutes);
router.use('/auth', authRoutes);

module.exports = router;
