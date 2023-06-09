const userService = require('../dao/users.dao');

module.exports = {
  signup,
  login
};

async function signup(req, res) {
  let user = req.body;
  let createdUser = await userService.addOne(user);
  return res.send(createdUser);
}


async function login(req, res) {
  return res.json({user: req.user});
}
