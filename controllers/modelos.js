const {response, request} = require('express');
const bcryptjs = require('bcryptjs');
const Modelos = require('../models/modelos');
const ModelosTodos = require('../models/modelosTodos');



const modelosGet  = async (req = request, res = response) => {

    const modelos = await ModelosTodos.findAll(); 
   
    res.json({
        modelos
    })
}


const modelosPost = async (req = request, res = response) => {


    const { maquina, modelo } = req.body;

 
    const modelos = await new Modelos({ maquina, modelo })


    try {
        
        const existeModelo = await Modelos.findOne( { where: {
            modelo: modelo
        } } );
        
        console.log(existeModelo)
        // Validacion si el usuario existe
        if ( existeModelo )
            return res.status(400).json({
                noExiste:false,
                msg:'Modelo existe en los registros del sistema'
        });
         
        await modelos.save()
        
        
        res.json({
        ok: true,
        modelo

    });
    } catch (error) {
        console.log(error)
            return res.status(500).json({
            ok:false,
            msg : 'Atencion!! Se ha producio un error al grabar el modelo '
      });
    }


   
}





module.exports={
    modelosGet,
    modelosPost
   
}