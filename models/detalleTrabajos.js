
// const sequelize = require('sequelize');
const { sequelize, Op, Model, DataTypes } = require("sequelize");
const db = require('../db/connection');

const detalleTrabajos = db.define('APP_detallePresupuesto',{
    
    numeroEncabezado:{
        type:DataTypes.NUMBER
        
    },
        linea:{
        type:DataTypes.NUMBER
       

    },
        codigoArticulo:{
        type:DataTypes.STRING
        
    },

        nombreArticulo:{
        type:DataTypes.STRING
        
    }
    
  
  
  
});
module.exports = detalleTrabajos;