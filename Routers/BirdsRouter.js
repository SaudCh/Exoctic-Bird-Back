const express = require("express");

const router = express.Router();
const BirdController = require("../Controllers/BirdsController");

router.get("/", BirdController.getAllBirds);
router.get("/user/:uid", BirdController.getBirdByUserId);
router.post("/add", BirdController.addBird);
router.patch("/update/:bid", BirdController.updateBird);
router.delete("/delete/:bid", BirdController.deleteBird);
router.get("/:bid", BirdController.getBirdById);

module.exports = router;
