/* Sistema de Ruteo */
const express= require('express');

const router= express.Router(); /* Router permiete crear rutas montables y desmontables */

const apiCategoriasControllers = require('../../controllers/apiControllers/apiCategoriasControllers');


router.get('/ofertas', apiCategoriasControllers.ofertas); // Walter

module.exports = router;