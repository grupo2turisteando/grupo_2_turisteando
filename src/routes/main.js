/* Sistema de Ruteo */

const path = require('path');
const express = require('express');
const router = express.Router(); /* Router permiete crear rutas montables y desmontables */
/* el metodo HTTP es llamado desde Router */

const paquetes_controllers = require('../controllers/paquetes_controller.js');

/* rutas con controladores */
router.get('/', paquetes_controllers.index_home);
router.get('/index', paquetes_controllers.index_home);

/* rutas - estas rutas deben estar en otros archivos dentro de "routes" ya que son de otroas
   secciones de la aplicacion */


router.get('/productCart', (req, res) => {
res.render(path.join(__dirname, '../views/productCart.ejs'));
});
router.get('/cartForm', (req, res) => {
    res.render(path.join(__dirname, '../views/cartForm.ejs'));
});

router.get('/cartFinal', (req, res) => {
    res.render(path.join(__dirname, '../views/cartFinal.ejs'));
});

router.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/register.html'));
});

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/login.html'));
});

router.get('/contacto', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/contacto.html'));
});

module.exports = router;