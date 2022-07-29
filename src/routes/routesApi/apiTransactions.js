/* Sistema de Ruteo */
const path = require('path');
const express= require('express');

const router= express.Router(); /* Router permiete crear rutas montables y desmontables */

const apiTransactionsControllers = require('../../controllers/apiControllers/apiTransactionsControllers');


router.get('/', apiTransactionsControllers.list);//Sil
// router.get('/:id', apiProductsControllers.detail);//



module.exports = router;