
// const sequelize = require('sequelize');
const { sequelize, Op, Model, DataTypes } = require("sequelize");
const db = require('../db/connection');

const imagen = db.define('APP_imagenes',{
    
 
    file_src:{
        type:DataTypes.STRING
    },
    usuario:{
        type:DataTypes.STRING
    },

  
});


module.exports = imagen;
