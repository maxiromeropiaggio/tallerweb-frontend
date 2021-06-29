import { Router } from 'express';
var router = Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'Entrega Final para Taller de Desarrollo Web' });
});

export default router;