
// const sequelize = require('sequelize');
const { sequelize, Op, Model, DataTypes } = require("sequelize");
const db = require('../db/connection');

const ordenTrabajo = db.define('ordenTrabajos',{
    

    id:{
        type:DataTypes.NUMBER,
        primaryKey: true
        
    },
    numeroOT:{
        type:DataTypes.NUMBER
        
    },
    fecha:{
        type:DataTypes.DATE
       
        
    },
    rutCliente:{
        type:DataTypes.NUMBER
       

    },
    digito:{
        type:DataTypes.STRING
        
    },

    nombreCliente:{
        type:DataTypes.STRING
        
    },
    nombreModelo:{
        type:DataTypes.STRING
        
    },
    estado:{
        type:DataTypes.STRING
        
    }
    
  
  
  
});


module.exports = ordenTrabajo;
