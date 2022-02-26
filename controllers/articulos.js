const {response, request} = require('express');
const bcryptjs = require('bcryptjs');
const Articulos = require('../models/articulos');

const articulosGet  = async (req = request, res = response) => {

    const articulos = await Articulos.findAll(); 
   
    res.json({
        articulos
    })
}

module.exports={
    articulosGet
   
}