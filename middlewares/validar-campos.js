const { request } = require("express");
const { validationResult } = require("express-validator");


const validarCampos = ( req, res, next ) =>{

    const errors = validationResult(req);
    if ( !errors.isEmpty() ){
        return res.status(400).json(error);
    }

    next();
}


module.exports = validarCampos;