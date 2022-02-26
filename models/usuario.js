
// const sequelize = require('sequelize');
const { sequelize, Op, Model, DataTypes } = require("sequelize");
const db = require('../db/connection');

const Usuario = db.define('secusuarios',{
    
    codigo_usuario:{
        type:DataTypes.STRING
        
    },
    password:{
        type:DataTypes.STRING
       
        
    },
    rut:{
        type:DataTypes.STRING
       

    },
    nombre:{
        type:DataTypes.STRING
        
    }
  
});


module.exports = Usuario;
