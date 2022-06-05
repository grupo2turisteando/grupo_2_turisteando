/* Sistema de Ruteo para el administrador */

const path = require('path');
const express = require('express');
const multer= require('multer');
const router = express.Router(); /* Router permiete crear rutas montables y desmontables */

const users_controller = require('../controllers/users_admin_controller.js');




module.exports= router;