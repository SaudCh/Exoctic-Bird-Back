const express = require("express");

const router = express.Router();
const BirdController = require("../Controllers/BirdsController");

router.get("/user/:uid", BirdController.getBirdByUserId);
router.get("/:bid", BirdController.getBirdById);

module.exports = router;
