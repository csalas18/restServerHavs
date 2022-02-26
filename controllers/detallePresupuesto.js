const {response, request} = require('express');
const bcryptjs = require('bcryptjs');
const DetallePresupuesto = require('../models/detallePresupuesto');
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

const detallePresupuestoPost  = async (req = request, res = response) => {
   

   
    const { numeroEncabezado, nombreArticulo, cantidad } = req.body;
    const detallePresupuesto = await new DetallePresupuesto ({ numeroEncabezado, nombreArticulo, cantidad })
    console.log(detallePresupuesto)
    try {

        await detallePresupuesto.save()
        
        res.json({
            ok:true,
            detallePresupuesto
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
    detallePresupuestoPost
    
}