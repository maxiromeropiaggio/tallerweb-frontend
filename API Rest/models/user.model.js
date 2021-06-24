const { Double } = require('mongodb');
const mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    surname: String,
    phone: Number,
    birth_date: { type: Date, default: Date.now },
    balance: Double,
    fixed_term = []
});

module.exports = mongoose.model('User', userSchema);