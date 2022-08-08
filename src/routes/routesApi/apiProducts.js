/* Sistema de Ruteo */
const path = require('path');
const express= require('express');
const cors = require('cors');

const router= express.Router(); /* Router permiete crear rutas montables y desmontables */

const apiProductsControllers = require('../../controllers/apiControllers/apiProductsControllers');


router.get('/', cors(), apiProductsControllers.list);//Facundo
router.get('/list', cors(), apiProductsControllers.list_Products);//Facundo

router.get('/:id', cors(), apiProductsControllers.detail);//Walter



module.exports = router;