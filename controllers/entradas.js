const {response, request} = require('express');
const bcryptjs = require('bcryptjs');
const Entradas = require('../models/entradas');
const { validationResult } = require('express-validator');

const entradasGet  = (req = request, res = response) => {

    const query = req.query;
   
    res.json({
        msg:'get API - Controlador',
        query
    })
}

const entradasPut  = (req, res = response) => {
   
    const id = req.params.id;

    res.json({
        msg:'put API - Controlador',
        id
    })
}

const entradasPost  = async (req = request, res = response) => {
   
    const { fechaEmision, codigoTecnico, rutCliente  } = req.body;
    const entrada = await new Entradas({ fechaEmision, codigoTecnico, rutCliente })

    try {

        await entrada.save()
        
        res.json({
            ok:true ,
            entrada
         } );
    
    } catch (error) {
     
            console.log(error)
            res.status(500).json({
                msg:'Se ha producido un error al intentar grabar el ingreso'
            });
    }
  


    
}

const entradasDelete  = (req, res = response) => {
   

    res.json({
        msg:'delete API - Controlador'
    })
}

const entradasPatch  = (req, res = response) => {
   
    res.json({
        msg:'patch API - Controlador'
    })
}




module.exports={
    entradasGet,
    entradasPut,
    entradasPost,
    entradasDelete,
    entradasPatch
}