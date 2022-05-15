
const { Router } = require('express');
const { check } = require('express-validator');
const { entradasGet, entradasPost, entradasDelete, entradasPatch, entradasPut  } = require('../controllers/entradas');
const validarCampos = require('../middlewares/validar-campos');

const router = Router();




    router.get('/', entradasGet );

    router.put('/:id', entradasPut );

    router.post('/' , [
           check('codigoTecnico', 'el codigo del tecnico es obligatorio').not().isEmpty(),
           check('rutCliente', 'debe ingresar el rut del usuario').not().isEmpty()
        
    ] ,entradasPost );
       

   

    router.delete('/', entradasDelete );

    router.patch('/', entradasPatch );

    

module.exports = router;