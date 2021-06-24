import User from '../models/user.model.js';

//create controller
var userController = {};

//get all users
userController.list = function(req,res) {

    find({}).exec(function(err, user){
        if (err) {
            console.log ( "Error: ", err);
            return err;
        }
        res.json(user);
    });

};

//get an user by email
userController.listOne = function(req,res) {

    find(req.params.email, function(err, user) {
        if (err) return next(err);
        res.json(user);
     });

};

//save user
userController.save = function(req, res) {

    find(req.body.email, (err, user)=>{
        if(err) return next(err);
        
        if (user != null)
            console.log("Cannot create new user, because another one exists with the same email.");

        var newUser = new User({
                email: req.body.email, name: req.body.name, surname: req.body.surname, phone: req.body.phone, birth_date: req.body.birth_date, balance: 0
            });
             
        newUser.save(function (err,user) {
            if (err) return next(err);
            res.json(user);
            });
    });
    
};

//update a user
userController.update = function(req, res) {

    findByIdAndUpdate(req.params.email,req.body, (err,user)=>{
        if(err) return next(err);
        res.json(user);
    });
};

//delete a user
userController.deleteOne = function(req, res) {

    findByIdAndRemove(req.params.email,req.body, (err,user)=>{
        if(err) return next(err);
        res.json(user);
    });
};

export { userController };