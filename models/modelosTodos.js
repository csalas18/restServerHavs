
// const sequelize = require('sequelize');
const { sequelize, Op, Model, DataTypes } = require("sequelize");
const db = require('../db/connection');

const Modelos = db.define('modelos',{
    
   
    id:{
        type:DataTypes.NUMBER,
        primaryKey: true
       
        
    },
    nombre:{
        type:DataTypes.STRING
       
        
    }
  
  
});


module.exports = Modelos;
