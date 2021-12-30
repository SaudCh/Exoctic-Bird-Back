const express = require("express");
const router = express.Router();
const userController = require("../Controllers/UserController");
const fileUpload = require("../Middleware/fileUpload")


router.post("/register", userController.register);
router.post("/login", userController.login);
router.patch("/updatePass/:uid", userController.updatePassword)
router.post("/updateInfo/:uid", userController.updateInfo)
router.delete("/delete/:uid", userController.deleteUser)
router.patch("/img/update", fileUpload.single('image'), userController.updateImage)
router.get("/:uid", userController.getUserById);

module.exports = router;
