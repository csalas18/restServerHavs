const { response, request } = require("express");
const  OT  = require('../models/ordenTrabajos');


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



module.exports = {
    buscarOT,
    buscarOtVigentes
}