const {response, request} = require('express');
// const Imagen = require('../models/imagenes');
const multer = require('multer');
const db = require('../db/connection');



this.URL = process.env.URL;

const imagenesPost = ((req, res) => {
    

    const body = req.body;
    const imagen = req.file;
    const usuario = body.usuario;
    const idRecepcion = body.idRecepcion;
    const nombreModelo = body.nombreModelo

  

    if (!req.file) {
        console.log("No se subió ningun archivo");

        
        // res.json({
        //     ok: false,
        //     imagen})
    } else {
       
        
       
        // console.log(req.file.filename)
        var imgsrc = '\\\\SERVIDORAVS\\imagenes\\' + req.file.filename
        var insertData = "INSERT INTO APP_imagenes(file_src, usuario, idRecepcion, nombreModelo) VALUES ( '" + imgsrc + "','" + usuario + "','" + idRecepcion + "','" + nombreModelo + "')"
        
        db.query(insertData, [imgsrc], (err, result) => {
            if (err) throw err
             console.log("file uploaded")
        })
       
        res.json({
            ok: true
            })
     

    }
});






module.exports={
    imagenesPost
   
}