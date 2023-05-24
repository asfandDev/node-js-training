const express = require('express');
const Users = require('./user.model');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const data = new Users({
      name: 'Ahmad',
      city: 'Lahore',
      age: 40
    });

    const user = await data.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router
