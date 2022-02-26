const {response, request} = require('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuario');
const { validationResult } = require('express-validator');

const usuariosGet  = (req = request, res = response) => {

    const query = req.query;
   
    res.json({
        msg:'get API - Controladorr',
        query
    })
}

const usuariosPut  = (req, res = response) => {
   
    const id = req.params.id;

    res.json({
        msg:'put API - Controlador',
        id
    })
}

const usuariosPost  = async (req = request, res = response) => {
   
   

    const { codigo_usuario, password, rut, nombre } = req.body;
    const usuario = await new Usuario({ codigo_usuario, password, rut, nombre })

    try {
        // console.log(body);
        // const usuario = await Usuario.create(body)

        const existeUsuario = await Usuario.findOne({  where: {
            
            codigo_usuario: codigo_usuario 
       
        } } );

        if ( existeUsuario ){
            return res.status(400).json({
                msg: 'El Usuario ingresado ya existe en los registros del sistema'   
            });
           
        }
        
        const salt = bcryptjs.genSaltSync();
        usuario.password =  bcryptjs.hashSync( password, salt );


        await usuario.save()

    res.json({
        msg:'post API - Controlador',
        usuario 
     } )
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg:'Se ha producido un error al intentar grabar el usuario'
        });
    }
   

  
}

const usuariosDelete  = (req, res = response) => {
   

    res.json({
        msg:'delete API - Controlador'
    })
}

const usuariosPatch  = (req, res = response) => {
   
    res.json({
        msg:'patch API - Controlador'
    })
}




module.exports={
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}