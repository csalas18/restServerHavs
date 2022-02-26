
// const sequelize = require('sequelize');
const { sequelize, Op, Model, DataTypes } = require("sequelize");
const db = require('../db/connection');

const Cliente = db.define('ges00001',{
    
    Rut_Cliente:{
        type:DataTypes.NUMBER
    },
    Dig_Cliente:{
        type:DataTypes.STRING
    },
    
    Raz_Cliente:{
        type:DataTypes.STRING
    },
    Dir_Cliente:{
        type:DataTypes.STRING
    },
    Codigo_Ciudad:{
        type:DataTypes.STRING
    },
    Codigo_Comuna:{
        type:DataTypes.STRING
    },
     email:{
        type:DataTypes.STRING
    },
    fono1:{
        type:DataTypes.STRING
        
    },
    nombreComuna:{
        type:DataTypes.STRING
    },
    nombreCiudad:{
        type:DataTypes.STRING
    }

  
});


module.exports = Cliente;
