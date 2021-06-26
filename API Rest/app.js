import pkg_bodyparser from 'body-parser';
import express from 'express';
import createError from 'http-errors';
import pkg_mongoose from 'mongoose';
import path from 'path';
import { dirname } from 'path';
import index from './routes/index.route.js';
import transactions from './routes/transaction.route.js';
import users from './routes/user.route.js';
const { connect } = pkg_mongoose;
const { json, urlencoded } = pkg_bodyparser;


connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true} ,function (err) {
  if (err) throw err;
  console.log('Successfully connected to mongoDB.');
});

var app = express();
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(express.static(path.join(dirname(import.meta.url), 'public')));

// view engine setup
app.set('views', path.join(dirname(import.meta.url), 'views'));
app.set('view engine', 'ejs');

app.use('/', index)
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