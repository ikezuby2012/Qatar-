const express = require("express");

const { protect, restrictUser } = require("../controllers/authController");
const {
    getAllTransactions, investment, withdrawal, getTransactionByUserId, deposit, deleteTransaction, approveTransaction,
    getLeaderBoard, getUserInvestments, getTotal, getTransaction, updateTransaction
} = require("../controllers/transactionController");

const router = express.Router();

router.use(protect);
router.route("/").get(getAllTransactions);
router.route("/:id").get(getTransaction)
    .delete(deleteTransaction).patch(updateTransaction);

router.route("/deposit").post(deposit);
router.route("/investment").post(investment);
// .get(getUserInvestments);
router.route("/withdrawal").post(withdrawal);
router.get("/trx/leaderboard", restrictUser("user"), getLeaderBoard);

router.patch("/approve/trx/:id", restrictUser("user"), approveTransaction);
router.get("/user/:id", getTransactionByUserId);

router.get("/total/:type", getTotal);
router.get("/investment/me", getUserInvestments)
module.exports = router;
