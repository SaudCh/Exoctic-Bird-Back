const express = require("express");

const router = express.Router();
const BirdController = require("../Controllers/BirdsController");

router.get("/user/:uid", BirdController.getBirdByUserId);
router.post("/add", BirdController.addBird);
router.post("/update/:bid", BirdController.updateBird);
router.get("/:bid", BirdController.getBirdById);

module.exports = router;
