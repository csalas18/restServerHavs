
// const sequelize = require('sequelize');
const { sequelize, Op, Model, DataTypes } = require("sequelize");
const db = require('../db/connection');

const Articulos = db.define('ges00011',{
    
    codigo_articulo:{
        type:DataTypes.STRING
        
    },
    nombre:{
        type:DataTypes.STRING
       
        
    },

    precio_venta:{
        type:DataTypes.NUMBER
       
        
    }
 
});


module.exports = Articulos;
