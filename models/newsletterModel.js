const mongoose = require("mongoose");
const validator = require("validator");

const { Schema, model } = mongoose;

const NewsletterSchema = new Schema({
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

module.exports = model("Newsletter", NewsletterSchema);