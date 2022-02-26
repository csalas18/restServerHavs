const { Router } = require('express');
const { check } = require('express-validator');
const { comunasGet } = require('../controllers/comunas');

const router = Router();




    router.get('/', comunasGet );


    

module.exports = router;