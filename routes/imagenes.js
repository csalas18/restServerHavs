const { Router } = require('express');
const { check } = require('express-validator');
const { imagenesPost } = require('../controllers/imagenes');
const multer = require('multer')
const path = require('path')
//  const upload = multer({ dest: './public/images/' })




const router = Router();

var storage = multer.diskStorage({
  destination: (req, file, callBack) => {
      callBack(null, './public/images/')     // './public/images/' directory name where save the file
  },
  filename: (req, file, callBack) => {
      callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})
var upload = multer({
  storage: storage
});

router.post('/' , upload.single('image'), imagenesPost );


module.exports = router;