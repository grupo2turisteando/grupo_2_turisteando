/* Sistema de Ruteo */
const path = require('path');
const express= require('express');

const router= express.Router(); /* Router permiete crear rutas montables y desmontables */

const apiUsersControllers = require('../../controllers/apiControllers/apiUsersControllers');


router.get('/register', apiUsersControllers.list_register);//Silvana
router.get('/register:id', apiUsersControllers.detail_register); //Ignacio

router.get('/customers', apiUsersControllers.list_customers);//Silvana
router.get('/customers/:id', apiUsersControllers.detail_customers); //Ignacio

module.exports = router;