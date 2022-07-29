/* Sistema de Ruteo */
const path = require('path');
const express= require('express');

const router= express.Router(); /* Router permiete crear rutas montables y desmontables */

const apiUsersControllers = require('../../controllers/apiControllers/apiUsersControllers');


router.get('/', apiUsersControllers.list);//Silvana
router.get('/:id', apiUsersControllers.detail); //Ignacio

module.exports = router;