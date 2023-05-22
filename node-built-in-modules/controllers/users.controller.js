const userService = require('../dao/users.dao')
const { v4: uuidv4 } = require('uuid');

module.exports = {
  addUser,
  getUsers,
  updateUser,
  deleteUser
};

function addUser(req, res) {

  return res.send(userService.createUser({...req.body , id:uuidv4()}));
}

function getUsers(req, res) {
  
  res.send(userService.listUsers())
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


