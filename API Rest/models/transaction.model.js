import pkg from 'mongoose';
const { Schema, model } = pkg;

var transactionSchema = new Schema({
    email: String,
    monto: Number,
    status: String,
    ipn_response: { source: String, raw: String },
    date: { type: Date , default: Date.now },

});

export default model('Transaction', transactionSchema);
