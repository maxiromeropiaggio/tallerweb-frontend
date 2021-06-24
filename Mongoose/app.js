const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const environment = require('./utils/environment.js');
var mongoose = require('mongoose');
var Transaction = require('./models/transaction.model.js');
const paymentStatus = require('./utils/types.js');


const dbName = environment.db_name;
const url = environment.db_url;

const client = new MongoClient(url);


var transaction1 = new Transaction({
   email: "matecocido@gmail.com",
   monto: 10, status: paymentStatus.PAYED, ipn_response: { source: 'MERCADOPAGO' }, date: "01/01/2021"
});



mongoose.connect(url, function (err) {
   if (err) throw err;
   console.log('Successfully connected');
   transaction1.save(function (err) {
      if (err) return handleError(err);
      console.log('guardado');
    });

   Transaction.buscarTodos((err, succ) => {
      console.log(succ);
   }); // find all

   Transaction.buscarEmail('matecocido@gmail.com', (err, succ) => {
      console.log(succ);
   });

   Transaction.updateMany(paymentStatus.UNPAYED, { $set: { status : paymentStatus.PAYED } }, (err, succ) => {
      console.log('Actualiza2 pagos');
   });


   Transaction.findOne({ monto: { $lt : 100 } }, function
      (err, succ) {
       if (err) return handleError(err);
      console.log('Se ha encontrado una transaccion menor a 100');
      });

   Transaction.deleteOne({ email : new RegExp('*\@live.com', 'i') }, function
   (err, succ) {
    if (err) return handleError(err);
   console.log('OP cOMPLETa');
   });

   //https://mongoosejs.com/docs/queries.html  



   mongoose.connection.close();
   });



const insertDocuments = (db, callback) => {

   const collection = db.collection('documents');


   collection.insertMany([
      { email: "matecocido@gmail.com", monto: 10, status: "UNPAYED", ipn_response: { source: 'MERCADOPAGO' }, date: "01/01/2021" },
      { email: "te@hotmail.com", monto: 250, status: "UNPAYED", ipn_response: { source: 'PAYPAL' }, date: "21/02/2021" },
      { email: "vinitoLGante@yahoo.com.ar", monto: 45, status: "UNPAYED", ipn_response: { source: 'PAYPAL' }, date: "21/05/2021" },
      {
         email: "testARUDO@hotmail.com", monto: 100, status: "PAYED",
         ipn_response: { source: 'PAYPAL', data: 'confirmation_Tag' }, date: "20/04/2021"
      },
      {
         email: "testAFERRO@gmail.com", monto: 300, status: "PAYED",
         ipn_response: { source: 'MERCADOPAGO', data: 'confirmation_Tag' }, date: "22/03/2021"
      },
      {
         email: "testAMENTO@hotmail.com", monto: 450, status: "PAYED",
         ipn_response: { source: 'MERCADOPAGO', data: "confirmation_Tag" }, date: "25/03/2021"
      }
   ], function (err, result) {
      assert.strictEqual(err, null);
      assert.strictEqual(6, result.result.n);
      assert.strictEqual(6, result.ops.length);
      console.log("Inserted 6 documents into the collection");
      callback(result);
   });

}

const findDocuments = function (db, callback) { //ALL DOCUMENTS
   // Get the documents collection
   const collection = db.collection('documents');
   collection.find({}).toArray(function (err, docs) {
      assert.strictEqual(err, null);
      console.log("Found the following records");
      console.log(docs)
      callback(docs);
   });
}

const findDocument = function (db, callback) {
   // Get the documents collection
   const collection = db.collection('documents');
   // Find some documents
   collection.find({ status: "PAYED" }).toArray(function (err, docs) {
      assert.strictEqual(err, null);
      console.log("Found the following records");
      console.log(docs);
      callback(docs);
   });


}

const updateDocument = function (db, callback, id, newemail) {
   // Get the documents collection
   const collection = db.collection('documents');
   collection.updateOne({ __id: id }
      , { $set: { email: newemail } }, function (err, result) {
         assert.strictEqual(err, null);
         assert.strictEqual(1, result.result.n);
         console.log("Updated the document");
         callback(result);
      });
}

const removeDocument = function (db, callback) {
   // Get the documents collection
   const collection = db.collection('documents');
   collection.deleteOne({ status: "UNPAYED" }, function (err, result) {
      assert.strictEqual(err, null);
      assert.strictEqual(1, result.result.n);
      console.log("Removed the document");
      callback(result);
   });
}

