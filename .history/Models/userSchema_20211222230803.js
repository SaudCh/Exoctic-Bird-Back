const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const userSchema = Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  gender: { type: String },
  username: { type: String },
  password: { type: String, required: true },
  img: String,
  birds: [{ type: mongoose.Types.ObjectId, required: true, ref: "Bird" }],
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
