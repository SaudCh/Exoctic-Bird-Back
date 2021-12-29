const express = require("express");

const router = express.Router();
const BirdRouter = require("../Controllers");

router.get("/", BirdRouter.getBirdById);

module.exports = router;
