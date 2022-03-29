const Newsletter = require("../models/newsletterModel");
const factory = require("./handleFactory");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");

exports.getAllNewsletter = catchAsync(async (req, res, next) => {
    const doc = await Newsletter.find({});

    res.status(200).json({
        status: "success",
        data: {
            data: doc
        }
    });
});

exports.createNewsletter = catchAsync(async (req, res, next) => {
    const doc = await Newsletter.create(req.body);

    if (!doc) {
        return next(new AppError("No document found with that Id", 404));
    }

    res.status(201).json({
        status: "success",
        data: {
            data: doc
        }
    });
});

exports.deleteNewsletter = factory.deleteOne(Newsletter);
exports.getNewsletter = factory.getOne(Newsletter);