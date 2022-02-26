const { Router } = require('express');
const { check } = require('express-validator');
const { ciudadesGet } = require('../controllers/ciudades');

const router = Router();




    router.get('/', ciudadesGet );


    

module.exports = router;