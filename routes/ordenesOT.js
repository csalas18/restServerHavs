const { Router } = require('express');
const { check } = require('express-validator');
const { buscarOT, buscarOtVigentes } = require('../controllers/ordenTrabajo');

const router = Router();


router.get('/', buscarOtVigentes );


router.get('/:NumeroOT', buscarOT);




   

module.exports = router;