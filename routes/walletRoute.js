const express = require("express");

const { protect, restrictUser } = require("../controllers/authController");
const {
    getAllWallets, getWalletById, createNewWallet
} = require("../controllers/walletController");

const router = express.Router();

router.use(protect);
router.route("/").get(getAllWallets).post(createNewWallet);
router.route("/user/:id").get(getWalletById);


module.exports = router;
