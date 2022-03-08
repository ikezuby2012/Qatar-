const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const walletSchema = new Schema({
    balance: {
        type: Number,
        default: 0
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    },
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

walletSchema.pre(/^find/, function (next) {
    this.populate({
        path: "user",
        select: "name email role"
    })
    next();
});

const Wallet = model("Wallet", walletSchema);
module.exports = Wallet;