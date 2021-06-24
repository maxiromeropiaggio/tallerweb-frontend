var mongoose = require('mongoose');
var Transaction = require('./models/transaction.model.js');
var express = require('express');
var bodyParser = require('body-parser');
var transactions = require('./routes/transaction.route')




mongoose.connect('mongodb://localhost:27017/test', function (err) {
   if (err) throw err;
   console.log('Successfully connected');

   
/*  ONLY FOR TEST
   var transaction1 = new Transaction({
      email: "matecocido@gmail.com",
      monto: 10, status: 'PAGO', ipn_response: { source: 'MERCADOPAGO' }, date: Date.now()
   });

   transaction1.save(function (err) {
      if (err) return handleError(err);
      console.log('guardado');
   });

   let id;

   Transaction.findOne({}, function
      (err, succ) {
      if (err) return handleError(err);
      console.log('Se ha encontrado una transaccion', succ);
      id = succ._id;
   });

   Transaction.updateMany(id, { $set: { 'ipn_response.raw': 'xd' } }, (err, succ) => {
      console.log('Actualiza2 pagos');
   });
 */

});

var app = express();
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false })); 

app.use('/transactions', transactions);

app.listen(3000);
console.log("Listening at port 3000 to requirements...");


