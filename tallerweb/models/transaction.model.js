import pkg from 'mongoose';
const { Schema, model } = pkg;

var transactionSchema = new Schema({
    email: String,
    mount: Number,
    status: String,
    source: String,
    date: { type: Date , default: Date.now },

});



export default model('Transaction', transactionSchema);
