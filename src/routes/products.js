// /* Sistema de Ruteo */

// const path = require('path');
// const express = require('express');
// const router = express.Router(); /* Router permite crear rutas montables y desmontables */
// /* el metodo HTTP es llamado desde Router */

// const products_controller = require('../controllers/products_controller.js');

// /* rutas con controladores */
// router.get('/', products_controller.packages);
// router.get('/', products_controller.deals);
// router.get('/', products_controller.productDetail);

// module.exports = router;


const path = require('path');
const express = require('express');
const router = express.Router(); /* Router permite crear rutas montables y desmontables */
/* el metodo HTTP es llamado desde Router */

const products_controller = require('../controllers/products_controller.js');

/* rutas con controladores */
router.get('/', products_controller.productDetail);

module.exports = router;