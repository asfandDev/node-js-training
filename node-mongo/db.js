

const mongoose = require("mongoose");
require("dotenv").config();
const database = {};

database.mongoose = mongoose;
database.url = 'mongodb+srv://asfand:1122@practice.pfoaivd.mongodb.net/?retryWrites=true&w=majority'


database.connectDatabase = () => {
  mongoose
    .connect(database.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('CONNECTED');
    })
    .catch((err) => {
      console.log('NOT_CONNECTED', err);
      process.exit();
    });
};

module.exports = { database };
