import pkg_mongoose from 'mongoose';
const { connect } = pkg_mongoose;
import express from 'express';
import pkg_bodyparser from 'body-parser';
const { json, urlencoded } = pkg_bodyparser;
import transactions from './routes/transaction.route.js';
import users from './routes/user.route.js';


connect('mongodb://localhost:27017/test', function (err) {
   if (err) throw err;
   console.log('Successfully connected to mongoDB.');
});

var app = express();
app.use(json()); 
app.use(urlencoded({ extended: false })); 

app.use('/transactions', transactions);
app.use('/users', users);

app.listen(3000);
console.log("Listening at port 3000 to requirements...");


