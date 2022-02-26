const { response, request } = require("express");
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuario');
const generarJWT = require("../helpers/generar-jwt");


const login = async (req = request, res = response) => {


    const { codigo_usuario, password } = req.body;


    try {
        
        const usuario = await Usuario.findOne( { where: {
            codigo_usuario: codigo_usuario,
            password: password
        } } )
        console.log('pruebass', usuario)
        // Validacion si el usuario existe
        if ( !usuario )
       
            return res.status(400).json({
                ok: false,
                msg:'Usuario / Contraseña no son correctos',
                error
                
        });

        // const validaPassword = bcryptjs.compareSync( password, usuario.password )
        
        // if ( !validaPassword )
        //     return res.status(400).json({
        //         ok: false,
        //         msg:'Usuario / Contraseña no son correctos - password'
        // });
        
         const token = await generarJWT( usuario.codigo_usuario )
         
        
        res.json({
        ok: true,
        token

    });
    } catch (error)
     {
        console.error('Unable to connect to the database:', error);
      return res.status(500).json({
             msg : 'Atencion error ddd',
             
      });
    }


   
}


module.exports = login;