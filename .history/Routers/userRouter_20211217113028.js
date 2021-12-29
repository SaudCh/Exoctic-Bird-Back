const express = require("express");

const router = express.Router();
const userController = require("../Controllers/UserController");

router.get("/", (req, res, next) => {
  res.send("Hello");
});

module.exports = router;
