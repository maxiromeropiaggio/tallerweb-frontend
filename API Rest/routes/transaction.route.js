var express = require('express');
var router = express.Router();
var Transaction = require('../models/transaction.model');

//obtener todos las transacciones
router.get('/',(req,res,next)=>{

    Transaction.find({}, function(err, trans) {
        if (err) return next(err);
        res.json(trans);
     });

});

//guardar transaccion
router.post('/', (req,res,next)=>{

    var newtransaction = new Transaction({
        email: req.body.email,
        monto: req.body.monto, status: req.body.status, ipn_response: { source: req.body.source, raw: req.body.raw }, date: Date.now()
     });

     newtransaction.save(function (err,trans) {
        if (err) return next(err);
        res.json(trans);
     });
});


//update 
router.put('/:id', (req,res,next)=>{

    Transaction.findByIdAndUpdate(req.params.id,req.body, (err,trans)=>{
        if(err) return next(err);
        res.json(trans);
    });
});

//delete 
router.delete('/:id', (req,res,next)=>{

    Transaction.findByIdAndRemove(req.params.id,req.body, (err,trans)=>{
        if(err) return next(err);
        res.json(trans);
    });
});


module.exports = router;

