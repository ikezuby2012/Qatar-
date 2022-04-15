const express = require("express");
const {
    getAllUsers, deleteUser, getUser, updateUser, updateMe, getAllUsersReferrals
} = require("../controllers/userController");
const { login, restrictUser,signup, protect, logout, createAdminUser } = require("../controllers/authController");

const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.get("/logout", logout);

router.use(protect);
router.route("/").get(getAllUsers);
router.patch("/updateMe", updateMe);
router.route('/:id')
    .get(getUser).patch(updateUser).delete(deleteUser);
router.get("/referral/:id", getAllUsersReferrals);

//create an admin user
router.patch("/makeAdmin/:id", restrictUser("user"), createAdminUser)
module.exports = router;