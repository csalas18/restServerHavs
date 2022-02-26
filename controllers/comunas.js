const {response, request} = require('express');
const bcryptjs = require('bcryptjs');
const Comunas = require('../models/comunas');

const comunasGet  = async (req = request, res = response) => {

    const comunas = await Comunas.findAll(); 
   
    res.json({
        comunas
    })
}






module.exports={
    comunasGet
   
}