// const sequelize = require('sequelize');
const { sequelize, Op, Model, DataTypes, TIME } = require("sequelize");
const db = require('../db/connection');

const EntradaPresupuesto = db.define('APP_encabezadoPresupuesto',{
    

  
    numeroOT:{
        type:DataTypes.NUMBER
    },
    fechaEmision:{
        type:DataTypes.DATE,
        defaultValue: new Date()
    },

    codigoTecnico:{
        type:DataTypes.STRING
        
    }

  
});


module.exports = EntradaPresupuesto;
