const { Router } = require('express');
const { check } = require('express-validator');
const { clientesPost } = require('../controllers/clientes');
const { clientesGet } = require('../controllers/clientes')
const validarCampos = require('../middlewares/validar-campos');



const router = Router();

router.post('/nuevoCliente', clientesPost );

router.get('/', clientesGet );



module.exports = router;
