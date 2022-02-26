
// const sequelize = require('sequelize');
const { sequelize, Op, Model, DataTypes } = require("sequelize");
const db = require('../db/connection');

const Modelos = db.define('APP_Temp_Modelos',{
    
   
    maquina:{
        type:DataTypes.STRING
       
        
    },
    modelo:{
        type:DataTypes.STRING
       
        
    }
  
  
});


module.exports = Modelos;
