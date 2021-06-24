var express = require('express');
var router = express.Router();
var User = require('../models/user.model');

//obtener todos los usuarios
router.get('/',(req,res,next)=>{

    User.find(req.body.email, function(err, trans) {
        if (err) return next(err);
        res.json(trans);
     });

});

//obtener el usuario dado por su email
router.get('/:email',(req,res,next)=>{

    User.find(req.params.email, function(err, trans) {
        if (err) return next(err);
        res.json(trans);
     });

});

//almacenar un usuario
router.post('/', (req,res,next)=>{

    User.find(req.body.email, (err, trans)=>{
        if(err) return next(err);
        
        if (trans != null)
            console.log("Cannot create new user, because another one exists with the same email.");

        var newUser = new User({
                email: req.body.email, name: req.body.name, surname: req.body.surname, phone: req.body.phone, birth_date: req.body.birth_date, balance: 0
            });
             
        newUser.save(function (err,trans) {
            if (err) return next(err);
            res.json(trans);
            });
    });
    
});


//update 
router.put('/:email', (req,res,next)=>{

    User.findByIdAndUpdate(req.params.email,req.body, (err,trans)=>{
        if(err) return next(err);
        res.json(trans);
    });
});

//delete
router.delete('/:email', (req,res,next)=>{

    User.findByIdAndRemove(req.params.email,req.body, (err,trans)=>{
        if(err) return next(err);
        res.json(trans);
    });
});


module.exports = router;

