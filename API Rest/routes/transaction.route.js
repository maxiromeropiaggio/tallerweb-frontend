import { Router } from 'express';
var router = Router();
import { transController } from '../controllers/transaction.controller.js';

router.get('/', (req,res)=>{
    transController.list(req, res);
});

router.post('/', (req,res)=>{
    transController.save(req, res);
});


router.put('/:id', (req,res)=>{
    transController.update(req, res);
});

router.delete('/:id', (req,res)=>{

    transController.deleteOne(req, res);
});


export default router;