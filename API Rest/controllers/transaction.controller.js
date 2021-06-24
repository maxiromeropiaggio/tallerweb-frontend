import Transaction from '../models/transaction.model.js';

//create controller
var transController = {};

//get all transactions
transController.list = function(req, res) {
    find({}).exec(function(err, trans){
        if (err) {
            console.log ( "Error: ", err);
            return err;
        }
        res.json(trans);
    });
};

//save transaction
transController.save = function(req, res) {
    var newTransaction = new Transaction({
        email: req.body.email,
        monto: req.body.monto, status: req.body.status, ipn_response: { source: req.body.source, raw: req.body.raw }, date: Date.now()
     });

     newTransaction.save(function (err,trans) {
        if (err) return next(err);
        res.json(trans);
     });
};

//update one transaction
transController.update = function(req, res) {
    findByIdAndUpdate(req.params.id,req.body, (err,trans)=>{
        if(err) return next(err);
        res.json(trans);
    });
};

//delete one transaction
transController.deleteOne = function(req, res) {
    findByIdAndRemove(req.params.id,req.body, (err,trans)=>{
        if(err) return next(err);
        res.json(trans);
    });
};

export { transController };