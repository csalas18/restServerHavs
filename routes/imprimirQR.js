
const { Router } = require('express');
const { check } = require('express-validator');
const { imprimirQRPost } = require('../controllers/imprimirQR');
const validarCampos = require('../middlewares/validar-campos');

const router = Router();

    
    router.post('/' , [
           check('codigoTecnico', 'el codigo del tecnico es obligatorio').not().isEmpty(),
           check('rutCliente', 'el rut de usuario es obligatorio').not().isEmpty()
        
    ] , imprimirQRPost );
       

   


    

module.exports = router;