const mongoose = require("mongoose");

const User = require("../models/userModel");
const Wallet = require("../models/walletModel");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");
const APIFeatures = require("../utils/apiFeatures");

exports.getAllWallets = catchAsync(async (req, res, next) => {
    const features = new APIFeatures(Wallet.find(), req.query)
        .filter().sort().limitFields().paginate();
    const wallets = await features.query;

    res.status(200).json({
        status: 'success',
        results: wallets.length,
        data: wallets
    });

});
exports.createNewWallet = catchAsync(async (req, res, next) => {
    const { user } = req.body;
    //check if user has a wallet
    let checkWallet = await Wallet.findOne({ user });

    if (checkWallet) {
        return next(new AppError("wallet does exist", 401));
    }
    const wallet = await Wallet.create({
        _id: user,
        user
    });
    //clear gc
    checkWallet = undefined;

    //done
    res.status(201).json({
        status: "success",
        data: wallet
    });
});

exports.populateUserWallet = catchAsync(async (req, res, next) => {
    const { id } = req.user;
    const _user = await User.findByIdAndUpdate(id, { wallet: id });

    res.status(204).json({
        status: "success",
        data: _user
    });
});

exports.getWalletByUserId = catchAsync(async (req, res, next) => {
    const { id } = req.params;

    const data = await Wallet.aggregate([
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
exports.updateWallet = catchAsync(async (req, res, next) => {

});
exports.getWalletById = catchAsync(async (req, res, next) => {
    const wallet = await Wallet.findById(req.params.id);

    if (!wallet) {
        return next(new AppError("no wallet found with that id", 404));
    }


    res.status(200).json({
        status: "success",
        data: wallet
    })
});
exports.deleteWallet = catchAsync(async (req, res, next) => {

});