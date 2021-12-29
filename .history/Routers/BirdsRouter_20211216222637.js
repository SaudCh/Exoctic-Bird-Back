const express = require("express");

const router = express.Router();
const BirdRouter = require("../Controllers");

router.get("/");

module.exports = router;
