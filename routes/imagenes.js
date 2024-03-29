const { Router } = require('express');
const { check } = require('express-validator');
const { imagenesPost } = require('../controllers/imagenes');
const multer = require('multer')
const path = require('path')


const FTPClient = require('ftp');
let ftp_client = new FTPClient();
const fs = require("fs");
let ftpConfig = {
     host: "cc3e0cfaac36.sn.mynetname.net",
     port: 21,
     user: 'ftp',
     password: 'setecsi',
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
 
  // var img = fs.readFileSync(req.file.path);

  ftp_client.connect(ftpConfig);
  
  // ftp_client.on('ready', function() { 
  //   ftp_client.list(function(err, list) {
  //     if (err) throw err;
  //     console.dir(list);
  //     ftp_client.end();
  //   });
  // }); 


  ftp_client.on('ready', function() {
    ftp_client.put('./public/images/' + nombre, '/disk1/fotos/'+ nombre, function(err) {
      //  ftp_client.put(img,'/flash/image-1655770711579.jpeg' , function(err) {
      if (err) throw err;
      ftp_client.end();
      console.log(file)
      console.log(file.originalname)
    }); 




  });
    
    
}



router.post('/' , upload.single('image'), imagenesPost );


module.exports = router;