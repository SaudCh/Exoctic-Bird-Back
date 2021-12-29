const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  phone: String,
  password: String,
});

module.exports = mongoose.model("User", userSchema);
