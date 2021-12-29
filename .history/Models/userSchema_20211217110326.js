const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = Schema({
  name: { type: String },
  email: String,
  phone: String,
  password: String,
});

module.exports = userSchema;
