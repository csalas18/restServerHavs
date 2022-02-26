
const { Router } = require('express');
const { check } = require('express-validator');
const { encabezadoPresupuestoPost  } = require('../controllers/encabezadoPresupuesto');
const validarCampos = require('../middlewares/validar-campos');

const router = Router()

    router.post('/' , [
           check('numeroOT', 'el numero de OT es obligatorio').not().isEmpty(),
           check('rutCliente', 'el rut de usuario es obligatorio').not().isEmpty()
        
    ] , encabezadoPresupuestoPost);
       

   

    

module.exports = router;