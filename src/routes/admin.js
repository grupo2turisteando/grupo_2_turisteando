/* Sistema de Ruteo para el administrador */

const path = require('path');
const express = require('express');
const router = express.Router(); /* Router permiete crear rutas montables y desmontables */
/* el metodo HTTP es llamado desde Router */

const admin_controllers = require('../controllers/admin_controllers.js');

/* rutas con controladores */
router.get('/crear', admin_controllers.get_package);
router.post('/crear', admin_controllers.post_package);
/* con la ruta /view muestro un paquete */
router.get('/', admin_controllers.get_package_view);
router.get('/search', admin_controllers.get_package_search);

module.exports= router;