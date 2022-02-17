const mongoose = require("mongoose");

const Users = mongoose.model(
  "users",
  mongoose.Schema(
    {
      username: {
        type: String,
        required: true,
        unique: true,
      },
      email: {
        type: String,
        unique: true,
        required: true,
      },
      nohp: {
        type: String,
        unique: true,
        required: true,
      },
    },
    { timestamps: true }
  )
);

module.exports = Users;
