const mongoose = require("mongoose")
const { type } = require("os")
const userSchema = mongoose.Schema({
    name: String,
    email: { type: String, require: true, unique: true },
    password: String,
    phone: Number
}, { timestamps: true })

mongoose.model.exports = mongoose.model("user", userSchema)