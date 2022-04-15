const express = require("express");

const { protect, restrictUser } = require("../controllers/authController");
const {
    getAllWallets, getWalletById, createNewWallet, deleteWallet, updateWallet
} = require("../controllers/walletController");

const router = express.Router();

router.use(protect);
router.route("/").get(restrictUser("user"), getAllWallets).post(createNewWallet);
router.route("/:id").delete(restrictUser("user"), deleteWallet).patch(restrictUser("user"), updateWallet);
router.route("/user/:id").get(getWalletById);

module.exports = router;
