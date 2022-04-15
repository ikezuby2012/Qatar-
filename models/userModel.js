const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const { Schema, model } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, "user must have a name!"]
    },
    email: {
        type: String,
        required: [true, "please provide an email address!"],
        unique: true,
        lowerCase: true,
        validate: [validator.isEmail, "please provide a valid email address"]
    },
    password: {
        type: String,
        required: [true, "please provide a password!"],
        minLength: [8, "password must have 8 or more characters"],
        select: false
    },
    passwordConfirm: {
        type: String,
        required: [true, "please confirm your password!"],
        minLength: [8, "password must have 8 or more characters"],
        validate: {
            validator: function (el) {
                //this works on save()
                return el === this.password;
            },
            message: "passwords does not match!"
        }
    },
    wallet: {
        type: Schema.Types.ObjectId,
        ref: "Wallet",
    },
    transactions: {
        type: Schema.Types.ObjectId,
        ref: "Transaction",
    },
    referrals: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    role: {
        type: String,
        enum: {
            values: ["user", "admin", "super-admin"],
            message: "role is either user or admin"
        },
        default: "user"
    },
    address: {
        type: String,
        lowerCase: true
    },
    phone_number: {
        type: String,
        // validate: [validator.isNumeric, "please provide a valid phone number"]
    },
    ethereum: {
        type: String,
        validate: [validator.isEthereumAddress, "please provide a valid ethereum address"]
    },
    bitcoin: {
        type: String,
        validate: [validator.isBtcAddress, "please provide a valid bitcoin address"]
    },
    usdt: {
        type: String
    },
    bnb: {
        type: String
    },
    country: {
        type: String
    },
    first_timer_bonus: {
        type: Boolean,
        default: false
    },
    active: {
        type: Boolean,
        default: true,
        select: false
    },
    passwordChangedAt: Date,
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});
UserSchema.pre(/^find/, function (next) {
    this.populate({
        path: "referrals",
        select: "name email role country"
    })
        .populate("wallet")
        .populate("transactions");
    next();
});

UserSchema.pre("save", async function (next) {
    // only run this function if password is not modified
    if (!this.isModified('password')) return next();
    //hash the password with cost of 12
    this.password = await bcrypt.hash(this.password, 12);
    //delete passwordConfirm field
    this.passwordConfirm = undefined;
    next();
});

UserSchema.pre("save", function (next) {
    if (!this.isModified("password") || this.isNew) return next();

    this.passwordChangedAt = Date.now - 1000; // token may be created before timeStamp so we subtract 1s
    next();
});

UserSchema.methods.correctPassword = async function (candidatePassword, userPassword) {
    return await bcrypt.compare(candidatePassword, userPassword);
};

UserSchema.methods.changePassword = function (JWTTimestamp) {
    if (this.passwordChangedAt) {
        const changeTS = parseInt(this.passwordChangedAt.getTime() / 1000, 10);
        console.log(changeTS, JWTTimestamp)

        return JWTTimestamp < changeTS;
    }
    // false means not changed
    return false;
};


const User = model("User", UserSchema);
module.exports = User;