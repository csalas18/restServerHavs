
// const sequelize = require('sequelize');
const { sequelize, Op, Model, DataTypes } = require("sequelize");
const db = require('../db/connection');

const Comunas = db.define('ges00006',{
    
    codigo_comuna:{
        type:DataTypes.STRING
        
    },
    nombre:{
        type:DataTypes.STRING
       
        
    }
  
  
});


module.exports = Comunas;
