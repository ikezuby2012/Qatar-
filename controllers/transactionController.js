'use strict';
const moment = require("moment");
const mongoose = require("mongoose");
const cron = require("node-cron");
const Transaction = require("../models/transactionModel");
const Wallet = require("../models/walletModel");
const User = require("../models/userModel");

const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");
const APIFeatures = require("../utils/apiFeatures");

const incInvestment = catchAsync(async (req, res, next) => {
    const investments = await Transaction.find(
        {
            transaction_type: "investment",
            payment_status: "pending"
        }
    );

    for (let el of investments) {
        if (moment().isAfter(el.end_time, "hour")) {
            // console.log(el);

            // if its true increment user wallet
            let trans = await Transaction.findOne(
                { _id: el.id },
                { $set: { payment_status: "success" } });
            // console.log(trans.user, trans.amount);

            const { _id, user, amount, potential_earning, payment_status } = trans;
            
            //check if user has a wallet
            const checkWallet = await Wallet.findOne({ user: user });

            if (!checkWallet) {
                await Wallet.create({
                    _id: user,
                    user
                });
            }

            await Wallet.updateOne(
                { user: user },
                { $inc: { balance: potential_earning } });
            //set payment_status to success

        }
    }
    // console.log(investments);
});

cron.schedule('*/10 * * * *', () => {
    console.log('running every 10 minutes');
    incInvestment();
});

exports.getAllTransactions = catchAsync(async (req, res, next) => {
    const features = new APIFeatures(Transaction.find(), req.query)
        .filter().sort().limitFields().paginate();
    const transactions = await features.query;

    res.status(200).json({
        status: 'success',
        results: transactions.length,
        data: transactions
    });

});

exports.createNewTransaction = catchAsync(async (req, res, next) => {

});
exports.getTransaction = catchAsync(async (req, res, next) => {
    const transaction = await Transaction.findById(req.params.id);

    if (!transaction) {
        return next(new AppError("no transaction found with that id", 404));
    }


    res.status(200).json({
        status: "success",
        data: transaction
    })
});

exports.getTransactionByUserId = catchAsync(async (req, res, next) => {
    const { id } = req.params;

    const data = await Transaction.aggregate([
        {
            $match: {
                "user": mongoose.Types.ObjectId(id)
            }
        },
        {
            $sort: {
                created_at: -1
            }
        }
    ]);

    if (!data) {
        return next(new AppError("could not fetch data!", 401));
    }

    res.status(200).json({
        status: "success",
        data
    })
});

exports.updateTransaction = catchAsync(async (req, res, next) => {
    const transaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    res.status(201).json({
        status: "successful",
        data: transaction
    });
});

exports.deleteTransaction = catchAsync(async (req, res, next) => {
    await Transaction.findByIdAndDelete(req.params.id);

    res.status(204).json({
        status: "successful",
        data: null
    });
});

exports.deposit = catchAsync(async (req, res, next) => {
    const { amount, transaction_id, transaction_type, payment_method, user } = req.body;

    //check if user has a wallet
    const checkWallet = await Wallet.findOne({ user: user });

    if (!checkWallet) {
        await Wallet.create({
            _id: user,
            user
        });
    }

    if (!transaction_type === "deposit") {
        return next(new AppError("please use the correct route", 500));
    }

    let checkUser = await User.findOne({ _id: user });
    if (!checkUser) {
        return next(new AppError("user does not exist", 401));
    }

    //save transaction
    const transaction = await Transaction.create({
        user,
        amount,
        transaction_type,
        payment_method,
        transaction_id,
        paymentStatus: "pending"
    });
    //clear gc
    // checkUser = null;
    // checkWallet = null;

    //done
    res.status(200).json({
        status: "success",
        data: transaction
    });
});

exports.approveDeposit = catchAsync(async (req, res, next) => {
    let { id } = req.params;
    //confirm deposit
    const transaction = await Transaction.findByIdAndUpdate(req.params.id, {
        payment_status: "success"
    });
    //increment user wallet
    let trans = await Transaction.findOne({ _id: id });
    // console.log(trans.user, trans.amount);
    const { user, amount } = trans;
    const updateWallet = await Wallet.updateOne({ user: user }, { $inc: { balance: amount } });
    // console.log("update wallet" + updateWallet);
    if (!updateWallet) {
        return next(new AppError("deposit failed", 403));
    }
    // trans = null;
    //done
    res.status(200).json({
        status: "success",
        data: transaction
    });
});
// {
//     "name": "starter",
//     "trade_duration": "24 hours"
// },
// {
//     "name": "cooper",
//     "trade_duration": "24 hours"
// },
// {
//     "name": "enthusiast",
//     "trade_duration": "1 week"
// },
// {
//     "name": "silver",
//     "trade_duration": "1 week(s)"
// },
// {
//     "name": "gold",
//     "trade_duration": "1 month(s)"
// },
// {
//     "name": "diamond",
//     "trade_duration": "1 month(s)"
// }
exports.investment = catchAsync(async (req, res, next) => {
    const { amount, investment_plan, transaction_type, potential_earning } = req.body;
    const user = req.user.id;
    let endDate;
    // const endTime = moment().add(1, "W").format("DD MMM YYYY");
    // console.log(endTime);

    if (!transaction_type === "investment") {
        return next(new AppError("please use the correct route", 500));
    }

    if (investment_plan === "starter" || investment_plan === "cooper") endDate = moment().add(1, "days").format("LLLL");
    if (investment_plan === "enthusiast" || investment_plan === "silver") endDate = moment().add(1, "W").format("LLLL");
    if (investment_plan === "gold" || investment_plan === "diamond") endDate = moment().add(1, "M").format("LLLL");

    console.log(endDate);

    let checkUser = await User.findOne({ _id: user });
    if (!checkUser) {
        return next(new AppError("user does not exist", 401));
    }
    // checkUser = null;

    const transaction = await Transaction.create({
        user,
        transaction_type,
        amount,
        potential_earning,
        investment_plan,
        payment_status: "pending",
        end_time: endDate
    });

    //done
    res.status(200).json({
        status: "success",
        data: transaction
    });
});

exports.withdrawal = catchAsync(async (req, res, next) => {
    const { amount, withdrawal_address, transaction_type, payment_method, user, } = req.body;

    if (!transaction_type === "withdrawal") {
        return next(new AppError("please use the correct route", 500));
    }

    let checkUser = await User.findOne({ _id: user });
    if (!checkUser) {
        return next(new AppError("user does not exist", 401));
    }
    // checkUser = null;

    const transaction = await Transaction.create({
        user,
        transaction_type,
        amount,
        payment_method,
        withdrawal_address,
        payment_status: "pending"
    });

    //done
    res.status(200).json({
        status: "success",
        data: transaction
    });
});

exports.getLeaderBoard = catchAsync(async (req, res, next) => {
    const doc = await Wallet.aggregate([
        {
            $sort: {
                balance: 1
            }
        }
    ]);

    res.status(200).json({
        status: "success",
        data: doc
    });
});

exports.getUserInvestments = catchAsync(async (req, res, next) => {
    const { id } = req.user;

    const data = await Transaction.aggregate([
        {
            $match: {
                "user": mongoose.Types.ObjectId(id),
                "transaction_type": { $eq: "investment" }
            }
        },
        {
            $sort: {
                created_at: 1
            }
        }
    ]);

    res.status(200).json({
        status: "success",
        data
    });
})