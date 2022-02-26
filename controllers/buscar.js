const { response } = require("express");
const  Clientes  = require('../models/clientes');


const coleccionesPermitidas=[
    'clientes',
    'modelos',
    'productos',
    'comunas'
];


const buscaClientes = async( termino = '', res = response) => {
    
    const cliente = await Clientes.findOne( { where: {
        rut_cliente: termino
    }});
   
    return res.json({
        results:( cliente ) ? [ cliente] : []
    })
}


const buscar = (req, res= response) => {

const { coleccion, termino } = req.params;



if ( !coleccionesPermitidas.includes( coleccion )){
    return res.status(400).json({
        msg:` Las colecciones permitidas son: ${ coleccionesPermitidas }`
    });
    }  
    
    switch( coleccion ){

        case 'clientes':
            buscaClientes(termino, res);
            break;
        case 'modelos':
            buscaTodos(res);
            break;
        case 'comunas':
            break;
        
        default:
            res.status(500).json({
            msg: 'error'
            });
    }
}


module.exports = {
    buscar
}