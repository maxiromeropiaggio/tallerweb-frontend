const mongoose = require('mongoose');
import { paymentStatus } from "./utils/types.js";


var transactionSchema = new mongoose.Schema({
    email: String,
    monto: Number,
    status: paymentStatus,
    ipn_response: [{ source: String }],
    date: Date
});

transactionSchema.methods.buscarTodos = function(cb){
    return this.model('Transaction').find({},cb);
}

transactionSchema.statics.buscarEmail = function(name,cb){
    return this.model('Transaction').find({ email : new RegExp(name, 'i')},cb);
}

module.exports = mongoose.model('Transaction', transactionSchema);

  