/* Sistema de Ruteo */
const path = require('path');
const express= require('express');

const router= express.Router(); /* Router permiete crear rutas montables y desmontables */

const apiProductsControllers = require('../../controllers/apiControllers/apiProductsControllers');


router.get('/', apiProductsControllers.list);
router.get('/products/:id', apiProductsControllers.detail);

module.exports = router;