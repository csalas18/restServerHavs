const { Router } = require('express');
const { check } = require('express-validator');
const { detalleGet, detallePost, detalleDelete, detallePatch, detallePut  } = require('../controllers/detalle');
const validarCampos = require('../middlewares/validar-campos');

const router = Router();




    router.get('/', detalleGet );

    router.put('/:id', detallePut );

    router.post('/' , [
           check('numeroEncabezado', 'el numero de recepción es obligatorio').not().isEmpty(),
           check('nombreModelo', 'el  modelo de la maquina es obligatorio').not().isEmpty()
        
    ] , detallePost );
       

   

    router.delete('/', detalleDelete );

    router.patch('/', detallePatch );

    

module.exports = router;