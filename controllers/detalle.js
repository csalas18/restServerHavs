const {response, request} = require('express');
const bcryptjs = require('bcryptjs');
const Detalle = require('../models/detalle');
const { validationResult } = require('express-validator');

const detalleGet  = (req = request, res = response) => {

    const query = req.query;
   
    res.json({
        msg:'get API - Controlador',
        query
    })
}

const detallePut  = (req, res = response) => {
   
    const id = req.params.id;

    res.json({
        msg:'put API - Controlador',
        id
    })
}

const detallePost  = async (req = request, res = response) => {
   
    const { numeroEncabezado, nombreModelo, estampa } = req.body;
    const detalle = await new Detalle ({ numeroEncabezado, nombreModelo, estampa })

    try {

        await detalle.save()
        
        res.json({
            ok:true,
            detalle
         } );
    
    } catch (error) {
     
            console.log(error)
            res.status(500).json({
                msg:'Se ha producido un error al intentar grabar el ingreso'
            });
    }
  


    
}

const detalleDelete  = (req, res = response) => {
   

    res.json({
        msg:'delete API - Controlador'
    })
}

const detallePatch  = (req, res = response) => {
   
    res.json({
        msg:'patch API - Controlador'
    })
}




module.exports={
    detalleGet,
    detallePut,
    detallePost,
    detalleDelete,
    detallePatch
}