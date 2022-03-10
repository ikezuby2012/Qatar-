const express = require("express");

const { protect, restrictUser } = require("../controllers/authController");
const {
    getAllTransactions, investment, withdrawal, getTransactionByUserId, deposit, deleteTransaction, approveDeposit
} = require("../controllers/transactionController");

const router = express.Router();

router.use(protect);
router.route("/").get(getAllTransactions);

router.route("/deposit").post(deposit);
router.route("/investment").post(investment);
router.route("/withdrawal").post(withdrawal);

router.patch("/deposit/:id", restrictUser("user"), approveDeposit);
router.get("/user/:id", getTransactionByUserId);

module.exports = router;
