const express = require("express");

const router = express.Router();
const userController = require("../Controllers/UserController");

router.get("/", userController.getAllUser);
router.post("/register", userController.addUser);
router.get("/login", userController.login);
router.get("/:uid", userController.getUserById);

module.exports = router;
