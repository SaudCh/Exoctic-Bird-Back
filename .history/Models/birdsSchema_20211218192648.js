const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const birdSchema = Schema({
  id: String,
  name: { type: String, required: true },
  location: String,
  price: Number,
  img: String,
  time: { type: Date, default: Date.now },
  category: String,
  user: { type: String, required: true },
});

module.exports = mongoose.model("Birds", birdSchema);