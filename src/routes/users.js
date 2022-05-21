//  Sistema de ruteo Usuarios  //

const path = require('path');
const express = require('express');
const router = express.Router();
const { check, validationResult, body } = require('express-validator');
const users_controller = require('../controllers/users_controller');

/* Rutas controladores usuarios */

/* Registro usuario */
router.get('/register', users_controller.register);
router.post('/register', users_controller.add_user);

/** Login usuario */
router.get('/login', users_controller.login);
router.post('/login', [
    check('email').isEmail().withMessage('Email inválido'),
    check('password').isLength({min: 8}).withMessage('La contraseña debe tener como mínimo 8 caracteres')
], users_controller.process_login);

module.exports = router;