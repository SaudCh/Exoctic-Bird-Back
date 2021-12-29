const express = require("express");

const router = express.Router();
const BirdController = require("../Controllers");

router.get("/:pid", BirdController.getBirdById);

module.exports = router;
