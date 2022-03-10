const express = require("express");
const {
    getAllUsers, deleteUser, getUser, updateUser, updateMe
} = require("../controllers/userController");
const { login, signup, protect, logout } = require("../controllers/authController");

const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.get("/logout", logout);

router.use(protect);
router.route("/").get(getAllUsers);
router.patch("/updateMe", updateMe);
router.route('/:id')
    .get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;