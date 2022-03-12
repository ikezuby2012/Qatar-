const mongoose = require("mongoose");
const validator = require("validator");

const { Schema, model } = mongoose;

const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, "please provide an email address!"],
        unique: true,
        lowerCase: true,
        validate: [validator.isEmail, "please provide a valid email address"]
    }
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});