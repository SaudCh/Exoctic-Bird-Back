const express = require("express");

const router = express.Router();
const userController = require("../Controllers/UserController");

router.get("/", userController.getAllUser);
router.post("/register", userController.addUser);
router.post("/updatePass/:uid", userController.updatePassword)
router.post("/updateInfo/:uid", userController.updateInfo)

router.post("/login", userController.login);
router.get("/:uid", userController.getUserById);

module.exports = router;
