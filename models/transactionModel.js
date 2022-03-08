const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const TransactionSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    transaction_id: {
        type: String,
        // required: [true, "transaction id is required"]
    },
    payment_method: {
        type: String,
        enum: ["BTC", "ETH", "USDT", "BNB"],
        upperCase: true,
        required: [true, "payment method is required"],
        default: "BTC"
    },
    withdrawal_address: {
        type: String,
    },
    amount: {
        type: Number,
        required: [true, "amount is required"],
    },
    transaction_type: {
        type: String,
        enum: ["investment", "withdrawal", "deposit"],
        required: [true, "transaction type is required"]
    },
    investment_plan: {
        type: String,
    },
    potential_earning: {
        type: Number,
        min: [0, "potential earning must not be less than 0"]
    },
    payment_status: {
        type: String,
        enum: ["success", "pending", "failed"],
        default: "pending",
    }
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    },
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

TransactionSchema.pre(/^find/, function (next) {
    this.populate({
        path: "user",
        select: "name email role"
    })
    next();
});

module.exports = model("Transaction", TransactionSchema);