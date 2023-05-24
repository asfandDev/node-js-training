const mongoose = require('mongoose');

let UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      max: 40
    },
    city: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
);


const Users = mongoose.model('user', UserSchema);
module.exports = Users;
