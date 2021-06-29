import Transaction from '../models/transaction.model.js';

//create controller
var transController = {};

//get all transactions
transController.list = function (req, res) {
    Transaction.find({}).exec(function (err, trans) {
        if (err) return res.status(500).json({ mensaje: "Error en el servidor", err });

        return res.json(trans);
    });
};

//save transaction
transController.save = function (req, res) {
    var newTransaction = new Transaction({
        email: req.body.email,
        monto: req.body.monto, status: req.body.status, ipn_response: { source: req.body.source, raw: req.body.raw }, date: Date.now()
    });
    newTransaction.save(function (err, trans) {
        if (err) return res.status(500).json({ mensaje: "Error en el servidor", err });
        
        return res.json(trans);
    });
};

//update one transaction
transController.update = function (req, res) {

    if (req.params.id == ' ')
        return res.status(400).json({ mensaje: "Ingrese ID de Transaccion" });

    Transaction.findByIdAndUpdate(req.params.id, req.body, (err, trans) => {
        if (!trans) return res.status(400).json({ mensaje: "Transaccion inexistente" });

        if (err) return res.status(500).json({ mensaje: "Error en el servidor", err });

        return res.status(200).json({ mensaje: 'Transaccion modificada' });
    });
};

//delete one transaction
transController.deleteOne = function (req, res) {
    if (req.params.id == ' ')
        return res.status(400).json({ mensaje: "Ingrese ID de Transaccion" });

    Transaction.findByIdAndRemove(req.params.id, req.body, (err, trans) => {
        if (!trans) return res.status(400).json({ mensaje: "Transaccion inexistente" });

        if (err) return res.status(500).json({ mensaje: "Error en el servidor", err });

        return res.status(200).json({ mensaje: 'Transaccion eliminada' });
    });
};

export { transController };