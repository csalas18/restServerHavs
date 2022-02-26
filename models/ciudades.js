
// const sequelize = require('sequelize');
const { sequelize, Op, Model, DataTypes } = require("sequelize");
const db = require('../db/connection');

const Ciudades = db.define('ges00005',{
    
    codigo_ciudad:{
        type:DataTypes.STRING
        
    },
    nombre:{
        type:DataTypes.STRING
       
        
    }
  
  
});


module.exports = Ciudades;
