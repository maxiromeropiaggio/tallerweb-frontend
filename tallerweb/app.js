import pkg_bodyparser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
import createError from 'http-errors';
import pkg_mongoose from 'mongoose';
import logger from 'morgan';
import dotnev from 'dotenv';
import index from './routes/index.route.js';
import transactions from './routes/transaction.route.js';
import users from './routes/user.route.js';
const { connect } = pkg_mongoose;
const { json, urlencoded } = pkg_bodyparser;
import { URL } from 'url';

dotnev.config();

connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
  if (err) throw err;
  console.log('Successfully connected to mongoDB.');
});

var app = express();

// view engine setup
app.set('views', decodeURIComponent(new URL('./views', import.meta.url).pathname));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

//setting public path
app.use(express.static(decodeURIComponent(new URL('./public', import.meta.url).pathname)));

app.use('/', index);
app.use('/transactions', transactions);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function (_req, _res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, _next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;