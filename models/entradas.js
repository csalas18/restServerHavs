// const sequelize = require('sequelize');
const { sequelize, Op, Model, DataTypes, TIME } = require("sequelize");
const db = require('../db/connection');

const Entrada = db.define('APP_encabezadoRecepcion',{
    
    fecha:{
        type:DataTypes.DATE,
        defaultValue: new Date()
    },
        codigoTecnico:{
        type:DataTypes.STRING

    },
        rutCliente:{
        type:DataTypes.NUMBER
        
    }
  
});


module.exports = Entrada;
