const { response, request } = require("express");
const OT  = require('../models/ordenTrabajos');
const OTDetalle = require('../models/detalleTrabajos');


const buscarOT = async( request , res = response) => {
    
    // const { Numero_OT } = req.body;
    const { NumeroOT } = request.params;



    const Ot = await OT.findOne( { where: {
        numeroOT: NumeroOT
    }});
   
    return res.json({
        results:( Ot ) ? [ Ot ] : []
    })
}


const buscarOtVigentes  = async (req = request, res = response) => {

    const OtVigentes = await OT.findAll(); 
   
    res.json({
        OtVigentes
    })
}

const buscarDetalleOT = async( request , res = response) => {
    
    // const { Numero_OT } = req.body;
    const { numeroEncabezado } = request.params;


   
    const OtDet = await OTDetalle.findAll( { where: {
        numeroEncabezado: numeroEncabezado
    }});
    console.log(OtDet)
    return res.json({
        results:( OtDet ) ? [ OtDet ] : []
    })
}



module.exports = {
    buscarOT,
    buscarOtVigentes,
    buscarDetalleOT
}