import pkg_mongoose from 'mongoose';
const { Schema, model } = pkg_mongoose;


var userSchema = new Schema({
    email: String,
    name: String,
    surname: String,
    phone: Number,
    birth_date: { type: Date, default: Date.now },
    balance: Number
});


export default model('User', userSchema);