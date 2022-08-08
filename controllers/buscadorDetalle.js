const { response, request } = require("express");
const OTDetalle = require('../models/detalleTrabajos');



const buscarDetalleOT = async( request , res = response) => {
    
    // const { Numero_OT } = req.body;
    const { detalleOT } = request.params;


    console.log(detalleOT)
    const OtDet = await OTDetalle.findOne( { where: {
        numeroEncabezado: detalleOT
    }});
   
    res.json({
        // results:( OTDetalle ) ? [ OTDetalle ] : []
        OtDet
    })
}



module.exports = {

    buscarDetalleOT
}