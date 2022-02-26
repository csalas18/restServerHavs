const { response, request } = require("express");
const Clientes = require('../models/clientes');




const clientesPost = async (req = request, res = response) => {


    const { Rut_Cliente, Dig_Cliente, Raz_Cliente, Dir_Cliente, Codigo_Comuna, Codigo_Ciudad, email, fono1, nombreComuna, nombreCiudad } = req.body;

 
    const cliente = await new Clientes({ Rut_Cliente, Dig_Cliente, Raz_Cliente, Dir_Cliente, Codigo_Comuna, Codigo_Ciudad, email, fono1, nombreComuna, nombreCiudad })


    try {
        
        const existeCliente = await Clientes.findOne( { where: {
            Rut_Cliente: Rut_Cliente
        } } );
        
        console.log(existeCliente)
        // Validacion si el usuario existe
        if ( existeCliente )
            return res.status(400).json({
                noExiste:false,
                msg:'Cliente existe en los registros del sistema'
        });
         
        await cliente.save()
        
        
        res.json({
        ok: true,
        cliente

    });
    } catch (error) {
        console.log(error)
            return res.status(500).json({
            ok:false,
            msg : 'Atencion!! Se ha producio un error al grabar cliente '
      });
    }


   
}



const clientesGet  = async (req = request, res = response) => {

    const clientes = await Clientes.findAll(); 
   
    res.json({
        clientes
    })
}

module.exports =
{clientesPost,
 clientesGet}
;