/* Sistema de Ruteo */
const path = require('path');
const express= require('express');
const cors = require('cors');

const router= express.Router(); /* Router permiete crear rutas montables y desmontables */

const apiProductsControllers = require('../../controllers/apiControllers/apiProductsControllers');


router.get('/', cors(), apiProductsControllers.list);//Facundo
router.get('/:id', apiProductsControllers.detail);//Walter



module.exports = router;