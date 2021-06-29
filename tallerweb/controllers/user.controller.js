import User from '../models/user.model.js';

//create controller
var userController = {};

//get all users
userController.list = function (req, res) {

    User.find({}).exec(function (err, users) {
        if (err) res.status(500).json({ mensaje: "Error en el servidor", err });

        return res.json(users);
    });

};

//get an user by email
userController.listOne = function (req, res) {
    if (!req.body || !req.body.email) {
        return res.status(400).json({ mensaje: "Debe ingresar datos" });
    }

    const data = req.body.email;

    User.find({ email: data }).exec(function (err, user) {
        if (err) res.status(500).json({ mensaje: "Error en el servidor", err });

        if (user.length == 0) {
            return res.json({
                mensaje: "Usuario no encontrado"
            })
        }

        return res.json(user);
    });

};

//save user
userController.save = function (req, res) {
    if (!req.body || !req.body.email) {
        return res.status(400).json({ mensaje: "Debe ingresar datos" });
    }
    const data = req.body.email;
    User.find({ email: data }).exec((err, user) => {
        if (err) return res.status(500).json({ mensaje: "Error en el servidor", err });

        if (user.length > 0) {
            return res.status(400).json({ mensaje: "Usuario ya existe" });
        }

        var newUser = new User({
            email: req.body.email, name: req.body.name, surname: req.body.surname, phone: req.body.phone, birth_date: req.body.birth_date, balance: req.body.balance
        });

        newUser.save(function (err, user) {
            if (err) return res.status(500).json({ mensaje: err });
            return res.json(user);
        });
    });

};

//update a user
userController.update = async function (req, res) {
    if (!req.body || !req.body.email) {
        return res.status(400).json({ mensaje: "Debe ingresar datos" });
    }

    await User.findOneAndUpdate({ email: req.params.email }, req.body, async (err, user) => {
        if (err) return res.status(500).json({ mensaje: "Error en el servidor", err });
        return res.status(200).json({ mensaje: "Modificado" }).send();
    });
};

//delete a user
userController.deleteOne = function (req, res) {
    if (!req.body || !req.body.email) {
        return res.status(400).json({ mensaje: "Debe ingresar datos" });
    }
    User.findOneAndRemove({ email: req.params.email }, req.body, (err, user) => {
        if (err) return res.status(500).json({ mensaje: "Error en el servidor", err });
        return res.status(200).json({ mensaje: "Eliminado" });
    });
};

export { userController };