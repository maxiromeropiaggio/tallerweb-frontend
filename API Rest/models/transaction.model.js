const mongoose = require('mongoose');


var transactionSchema = new mongoose.Schema({
    email: String,
    monto: Number,
    status: String,
    ipn_response: { source: String, raw: String },
    date: { type: Date , default: Date.now },

});

module.exports = mongoose.model('Transaction', transactionSchema);
