const {response, request} = require('express');
const bcryptjs = require('bcryptjs');
const imprimirQR = require('../models/imprimirQR');
const { validationResult } = require('express-validator');



const imprimirQRPost  = async (req = request, res = response) => {
   
    const { Campo1, Campo2, Campo3 } = req.body;

    console.log('bodys',req.body)
    const imprimir = await new imprimirQR({ Campo1, Campo2, Campo3 })

    try {

        await imprimir.save()
        
        res.json({
            ok:true ,
            imprimir
         } );
    
    } catch (error) {
     
            console.log(error)
            res.status(500).json({
                msg:'Se ha producido un error al intentar grabar el ingreso'
            });
    }
  


    
}







module.exports={
    imprimirQRPost
}