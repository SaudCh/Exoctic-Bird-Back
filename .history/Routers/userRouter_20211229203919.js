const express = require("express");

const router = express.Router();
const userController = require("../Controllers/UserController");
const fileUpload = require("../Middleware/fileUpload")

router.post("/register", userController.addUser);
router.delete("/delete/:uid", userController.deleteUser)
router.patch("/updatePass/:uid", userController.updatePassword)
router.post("/updateInfo/:uid", userController.updateInfo)
router.post("/login", userController.login);
router.get("/:uid", userController.getUserById);
router.patch("/img/update", fileUpload.single('image'),)

module.exports = router;
