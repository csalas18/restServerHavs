// const sequelize = require('sequelize');
const { sequelize, Op, Model, DataTypes } = require("sequelize");
const db = require('../db/connection');

const DetallePresupuesto = db.define('APP_detallePresupuesto',{
    

    numeroEncabezado:{
        type:DataTypes.NUMBER
       
    },
        nombreArticulo:{
        type:DataTypes.STRING

    },
        cantidad:{
        type:DataTypes.NUMBER
    }
  
});


module.exports = DetallePresupuesto;
