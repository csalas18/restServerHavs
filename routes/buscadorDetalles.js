const { Router } = require('express');
const { check } = require('express-validator');
const { buscarDetalleOT } = require('../controllers/ordenTrabajo');

const router = Router();



router.get('/:numeroEncabezado', buscarDetalleOT);




   

module.exports = router;