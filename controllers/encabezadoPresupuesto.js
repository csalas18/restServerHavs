const {response, request} = require('express');
const bcryptjs = require('bcryptjs');
const EntradaPresupuesto = require('../models/encabezadoPresupuesto');
const { validationResult } = require('express-validator');





const encabezadoPresupuestoPost  = async (req = request, res = response) => {
   

   
    const { numeroOT, codigoTecnico } = req.body;
   

    const OT  = await EntradaPresupuesto.findOne({
        where :{
            numeroOT: req.body.numeroOT
        }
    })

    if (ot){
        return res.status(400).json({
            msg: 'Ya existe el numero de OT'
        }) ;
    }

    const encabezado = await new EntradaPresupuesto({ numeroOT, codigoTecnico })
    try {
    


        await encabezado.save()
        
        res.json({
            ok:true ,
            encabezado
         } );
    
    } catch (error) {
     
            console.log(error)
            res.status(500).json({
                msg:'Se ha producido un error al intentar grabar el presupuesto'
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
    encabezadoPresupuestoPost,
    entradasDelete,
    entradasPatch
}