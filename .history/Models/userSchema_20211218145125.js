const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const userSchema = Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  phone: String,
  password: String,
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
