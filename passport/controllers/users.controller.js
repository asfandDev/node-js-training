const userService = require('../dao/users.dao')

module.exports = {
  addUser,
  getUsers,
  updateUser,
  deleteUser
};

async function addUser(req, res) {

  let user = req.body
  let createdUser = await userService.addOne(user)
  return res.send(createdUser);
}

async function getUsers(req, res) {
  const users = await userService.listUsers();
  console.log(users)
  if(!users) res.send([])
  res.send(users)
}

function updateUser(req, res) {
  const reqObj = req.body
  const userId = req.params.id

  return res.send(userService.updateUser(userId, reqObj))
}

function deleteUser(req, res) {
  const userId = req.params.id

  return res.send(userService.deleteUser(userId))
}
