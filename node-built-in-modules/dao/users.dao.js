const fs = require("fs");
const path = require("path");
const dbPath = path.join(__dirname, "../database", "db.json");

module.exports = {
  listUsers,
  createUser,
  updateUser,
  deleteUser 
};

function listUsers() {
  try {
    const data = fs.readFileSync(dbPath, "utf8");
    const users = JSON.parse(data).users;
    return users;
  } catch (error) {
    return error;
  }
}

function createUser(user) {
  try {
    const fileData = fs.readFileSync(dbPath, "utf8");
    const data = JSON.parse(fileData);
    data.users.push(user);
    fs.writeFileSync(dbPath, JSON.stringify(data), {
      encoding: "utf8",
    });
    return "User created successfully";
  } catch (error) {
    return error;
  }
}

function updateUser(id, update) {
  try {
    const fileData = fs.readFileSync(dbPath, "utf8");
    const data = JSON.parse(fileData);
    let userIndex = data.users.findIndex((user) => user.id === id);
    let newUser = { ...data.users[userIndex], ...update };
    data.users[userIndex] = newUser;
    fs.writeFileSync(dbPath, JSON.stringify(data), {
      encoding: "utf8",
    });
    return "User Updated successfully";
  } catch (error) {
    return error;
  }
}

function deleteUser(id) {
  try {
    const fileData = fs.readFileSync(dbPath, "utf8");
    const data = JSON.parse(fileData);
    let newUsers = data.users.filter((user) => user.id !== id);
    data.users = newUsers;
    fs.writeFileSync(dbPath, JSON.stringify(data), {
      encoding: "utf8",
    });
    return "User Deleted successfully";
  } catch (error) {
    return error;
  }
}
