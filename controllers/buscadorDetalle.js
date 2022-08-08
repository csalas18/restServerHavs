const { response, request } = require("express");
const OTDetalle = require('../models/detalleTrabajos');



const buscarDetalleOT = async( request , res = response) => {
    
    // const { Numero_OT } = req.body;
    const { detalleOT } = request.params;


  
    const OtDet = await OTDetalle.findOne( { where: {
        numeroEncabezado: detalleOT
    }});
   
    return res.json({
        results:( OtDet ) ? [ OtDet ] : []
    })
}



module.exports = {

    buscarDetalleOT
}