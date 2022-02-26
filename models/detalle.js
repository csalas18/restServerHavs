// const sequelize = require('sequelize');
const { sequelize, Op, Model, DataTypes } = require("sequelize");
const db = require('../db/connection');

const Detalle = db.define('APP_detalleRecepcion',{
    

    numeroEncabezado:{
        type:DataTypes.NUMBER
       
    },
        nombreModelo:{
        type:DataTypes.STRING

    },
    estampa:{
        type:DataTypes.STRING
    }
  
});


module.exports = Detalle;
