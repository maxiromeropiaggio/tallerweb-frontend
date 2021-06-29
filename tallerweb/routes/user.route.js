import { Router } from 'express';
var router = Router();
import { userController } from '../controllers/user.controller.js';

router.get('/', (req, res) => {
    userController.list(req, res);
});

router.get('/:email', (req, res) => {
    userController.listOne(req, res);
});

router.post('/', (req, res) => {
    userController.save(req, res);
});

router.put('/:email', (req, res) => {
    userController.update(req, res);
});

router.delete('/:email', (req, res) => {
    userController.deleteOne(req, res);
});


export default router;