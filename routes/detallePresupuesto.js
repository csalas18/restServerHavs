const { Router } = require('express');
const { check } = require('express-validator');
const { detallePresupuestoPost  } = require('../controllers/detallePresupuesto');

const validarCampos = require('../middlewares/validar-campos');

const router = Router();



    

    router.post('/' , [
           check('numeroEncabezado', 'el numero de recepción es obligatorio').not().isEmpty(),
           check('nombreArticulo', 'el  articulo  es obligatorio').not().isEmpty()
        
    ] , detallePresupuestoPost );
       

   


module.exports = router;