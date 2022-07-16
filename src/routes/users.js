//  Sistema de ruteo Usuarios  //
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const users_controller = require('../controllers/users_controller');

// Middlewares
const validations = require('../middlewares/validation_middleware');
const uploadFile = require('../middlewares/multer_middleware');
const guest_middleware = require('../middlewares/guest_middleware');
const auth_middleware = require('../middlewares/auth_middleware');

/* Rutas controladores usuarios */

// Registro usuario
router.get('/register', guest_middleware, users_controller.register);  //renderiza la vista

router.post('/register', uploadFile.single('avatar'), validations, users_controller.create_user);

// Login usuario
router.get('/login', guest_middleware, users_controller.login);

router.post('/login', users_controller.user_login);

// Perfil usuario
router.get('/profile', auth_middleware, users_controller.profile);

router.get('/profile/:id', users_controller.edit)

router.put('/profile/edit/:id', users_controller.actualizar)

// Logout
router.get('/logout', users_controller.logout);

module.exports = router;