const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const birdSchema = Schema({
  id: Number,
  name: { type: String, required: true },
  location: String,
  price: Number,
  img: String,
  time: { type: Date, default: Date.now },
  category: String,
});

module.exports = mongoose.model("Birds", birdSchema);
