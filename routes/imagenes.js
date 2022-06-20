const { Router } = require('express');
const { check } = require('express-validator');
const { imagenesPost } = require('../controllers/imagenes');
const multer = require('multer')
const path = require('path')

const FTPClient = require('ftp');
let ftp_client = new FTPClient();
const fs = require("fs");
let ftpConfig = {
     host: "6737068e551e.sn.mynetname.net",
     port: 25,
     user: 'ftp',
     password: 'a1b2c3d4e5',
}
//  const upload = multer({ dest: './public/images/' })





const router = Router();

var storage = multer.diskStorage({
 

  destination: (req, file, callBack) => {
      // callBack(null, './imagenes/') 
      callBack(null, './public/images/')     // './public/images/' directory name where save the file
  },
  filename: (req, file, callBack) => {
    let nombre =  file.fieldname + '-' + Date.now() + path.extname(file.originalname)
      // callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
      callBack(null, nombre)
      ftp_connect(req,file, nombre)
     

  }
  
})

var upload = multer({
  storage: storage

},




);



async function ftp_connect(req,file, nombre) {
 
  ftp_client.connect(ftpConfig);
  
  // ftp_client.on('ready', function() { 
  //   ftp_client.list(function(err, list) {
  //     if (err) throw err;
  //     console.dir(list);
  //     ftp_client.end();
  //   });
  // }); 


  ftp_client.on('ready', function() {
    ftp_client.put('./public/images/' + nombre, '/flash/Imagen1.jpg', function(err) {
      if (err) throw err;
      ftp_client.end();
      // console.log(req)
    });



  });
    
    
}



router.post('/' , upload.single('image'), imagenesPost );


module.exports = router;