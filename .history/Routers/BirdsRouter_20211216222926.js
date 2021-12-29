const express = require("express");

const router = express.Router();
const BirdController = require("../Controllers/BirdsController");

router.get("/:pid", BirdController.getBirdById);

module.exports = router;
