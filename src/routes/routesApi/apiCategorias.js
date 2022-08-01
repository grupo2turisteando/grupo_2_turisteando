/* Sistema de Ruteo */
const express= require('express');
const cors = require('cors')

const router= express.Router(); /* Router permiete crear rutas montables y desmontables */

const apiCategoriasControllers = require('../../controllers/apiControllers/apiCategoriasControllers');

const corsOptions = {
    origin: 'http://localhost:3000/',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }


router.get('/ofertas', cors(), apiCategoriasControllers.ofertas); // Walter

module.exports = router;