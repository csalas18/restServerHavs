// const sequelize = require('sequelize');
const { sequelize, Op, Model, DataTypes, TIME } = require("sequelize");
const db = require('../db/connection');

const Imprimir = db.define('IMP000001',{
    
   
    tipo:{
        type:DataTypes.STRING,
        defaultValue: 'Qr'
        
    },
        Campo1:{
        type:DataTypes.STRING,
        defaultValue: 'Sin Descripcion'

    },
        Campo2:{
        type:DataTypes.STRING,
        defaultValue: 'Sin Descripcion'
        
    },
        Campo3:{
        type:DataTypes.STRING
    
}
  
});


module.exports = Imprimir;
