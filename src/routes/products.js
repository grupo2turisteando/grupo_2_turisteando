/* Sistema de Ruteo */

const path = require('path');
const express = require('express');
const router = express.Router(); /* Router permite crear rutas montables y desmontables */
/* el metodo HTTP es llamado desde Router */

const product_controller = require('../controllers/product_controller.js');

/* rutas con controladores */
router.get('/', product_controller.packages);
router.get('/', product_controller.deals);
router.get('/', product_controller.productDetail);

module.exports = router;