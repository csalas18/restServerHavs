
const { Router } = require('express');
const { check } = require('express-validator');
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete, usuariosPatch } = require('../controllers/usuarios');
const validarCampos = require('../middlewares/validar-campos');

const router = Router();




    router.get('/', usuariosGet );

    router.put('/:id', usuariosPut );

    router.post('/',[
        check('codigo_usuario', 'el codigo de usuario es obligatorio').not().isEmpty(),
        check('password', 'el password de usuario es obligatorio').not().isEmpty(),
        check('rut', 'el rut de usuario es obligatorio').not().isEmpty(),
        check('nombre', 'el nombre de usuario es obligatorio').not().isEmpty(), validarCampos

    ], usuariosPost );

    router.delete('/', usuariosDelete );

    router.patch('/', usuariosPatch );

    

module.exports = router;