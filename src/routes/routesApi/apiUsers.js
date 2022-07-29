/* Sistema de Ruteo */
const path = require('path');
const express= require('express');

const router= express.Router(); /* Router permiete crear rutas montables y desmontables */

const apiUsersControllers = require('../../controllers/apiControllers/apiUsersControllers');


router.get('/', apiUsersControllers.list);
router.get('/products/:id', apiUsersControllers.detail);

module.exports = router;