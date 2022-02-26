const { Router } = require('express');
const { check } = require('express-validator');
const { articulosGet } = require('../controllers/articulos');

const router = Router();




    router.get('/', articulosGet );


    

module.exports = router;