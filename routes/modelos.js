const { Router } = require('express');
const { check } = require('express-validator');
const { modelosGet, modelosPost } = require('../controllers/modelos');

const router = Router();




    router.get('/', modelosGet );


    router.post('/nuevoModelo' , [
              check('maquina', 'el  nombre de la maquina es obligatorio').not().isEmpty(),
              check('modelo', 'el  nombre del modelo es obligatorio').not().isEmpty()
        
 ] , modelosPost );

module.exports = router;