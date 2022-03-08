const express = require("express");
const {
    getAllUsers, deleteUser, getUser, updateUser, updateMe
} = require("../controllers/userController");
const { login, signup, protect } = require("../controllers/authController");

const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);

router.use(protect);
// router.route("/").get(getAllUsers);
// router.patch("/updateMe/:id", updateMe);
// router.route('/:id')
//     .get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;