const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const {user} = prisma;

module.exports = {
  addOne,
  findOne,
  findWhere,
  update,
  deleteOne,
  listUsers
};

function findOne(paramsObject) {
    const options = paramsObject;
    return user.findFirst(options);
}

function listUsers() {
  return user.findMany();
}


function addOne(userData) {
    return user.create({
        data: {...userData}
    });
}


function findWhere(paramsObject) {
    const options = paramsObject;
    return user.findMany(options);
}


function update(data, options) {
    return user.update(data, options);
}

function deleteOne(id) {
    return user.delete({
        where: {
          id
        },
      })
}
