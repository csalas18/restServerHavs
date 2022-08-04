const express = require('express')
const cors = require('cors');
const db = require('../db/connection');



const path = require('path');
const sharp = require('sharp');
const bodyparser = require('body-parser')



class Server{


    constructor(){

        this.app  = express();
        this.port = process.env.PORT; 
        this.usuariosPath = '/api/usuarios';
        this.authPath = '/api/auth';
        this.clientesPath = '/api/clientes';
        this.buscarPath    = '/api/buscar';
        this.modelosPath    = '/api/modelos';
        this.articulosPath    = '/api/articulos';
        this.entradasPath =  '/api/entradas';
        this.detallesPath =  '/api/detalles';
        this.comunasPath    = '/api/comunas';
        this.ciudadesPath    = '/api/ciudades';
        this.ordenesOtPath = '/api/buscarOT';
        this.imprimirQRPath = '/api/imprimirQR';
        this.EncabezadoPresupuestoPath = '/api/encabezadoPresupuesto';
        this.DetallePresupuestoPath = '/api/detallePresupuesto';
        this.imagenesPath = '/api/imagenes';
        this.buscarDetalle = '/api/buscarDetalle';
        

        //Coneccion a sql server
        this.dbConnection();

        // Middlewares
        this.middlewares();
      
        //Rutas de mi aplicación
        this.routes();
       
    }
    

    async dbConnection(){

        try {
            await db.authenticate();
            console.log('Connection has been established successfully.');
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }
    }

    middlewares(){

        // Cors
        this.app.use( cors() );

        //Lectura y parseo del body
        this.app.use( express.json() );

        // Directorio Publico
        this.app.use( express.static('public') );

       

    }
    
    routes(){
             this.app.use(this.authPath, require('../routes/auth') );
             this.app.use(this.buscarPath, require('../routes/buscar') );
             this.app.use(this.usuariosPath, require('../routes/usuarios') );
             this.app.use(this.clientesPath, require('../routes/clientes') );
             this.app.use(this.modelosPath, require('../routes/modelos') );
             this.app.use(this.articulosPath, require('../routes/articulos') );
             this.app.use(this.entradasPath, require('../routes/entradas') );
             this.app.use(this.detallesPath, require('../routes/detalles') );
             this.app.use(this.comunasPath, require('../routes/comunas') );
             this.app.use(this.ciudadesPath, require('../routes/ciudades') );
             this.app.use(this.ordenesOtPath, require('../routes/ordenesOT') );
             this.app.use(this.imprimirQRPath, require('../routes/imprimirQR') );
             this.app.use(this.EncabezadoPresupuestoPath, require('../routes/encabezadoPresupuesto') );
             this.app.use(this.DetallePresupuestoPath, require('../routes/detallePresupuesto') );
             this.app.use(this.imagenesPath, require('../routes/imagenes') );
            this.app.use(this.buscarDetalle, require('../routes/buscadorDetalles'))





             
             

         }
    
    
    listen(){
        
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
 

}

}



module.exports = Server;