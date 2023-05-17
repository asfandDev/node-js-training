function createUser(req, res) {
  console.log(req.body);
  console.log("if it reaches here , it's into db");

  return res.status(401).send({ number: 4587 });

  const ab = "123";
  console.log(ab)

  res.send(ab)
}

module.exports = {
  createUser,
};
