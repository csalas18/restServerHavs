const {response, request} = require('express');
const bcryptjs = require('bcryptjs');
const Ciudades = require('../models/ciudades');

const ciudadesGet  = async (req = request, res = response) => {

    const ciudades = await Ciudades.findAll(); 
   
    res.json({
        ciudades
    })
}






module.exports={
    ciudadesGet
   
}