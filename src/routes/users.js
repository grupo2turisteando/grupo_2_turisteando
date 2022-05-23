//  Sistema de ruteo Usuarios  //

const path = require('path');
const express = require('express');
const router = express.Router();
const multer = require('multer');
const { check, validationResult, body } = require('express-validator');

const users_controller = require('../controllers/users_controller');

 // Multer */
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/images/avatars'));
    },
    filename: (req, file, cb) => {
        let file_name = `${Date.now()}_img${path.extname(file.originalname)}`;  
        cb(null, file_name);
    }
})

const uploadFile = multer({ storage });

// Validaciones
const validations = [
    body('user').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('email')
        .notEmpty().withMessage('Tienes que escribir un email').bail()
        .isEmail().withMessage('Debes escribir un formato de correo válido'),
    body('password')
        .notEmpty().withMessage('Tienes que escribir una contraseña').bail()
        .isLength( {min: 8} ).withMessage('La contraseña debe tener como mínimo 8 caracteres'),
    body('password_valid')
        .notEmpty().withMessage('Tienes que repetir la contraseña').bail()
        .custom((value, { req }) => {
            if (value !== req.body.password) {
              throw new Error('La contraseña de verificación no coincide. Intentalo de nuevo ');
            }

            return true;
          }),
    body('avatar').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png'];
        
        if (!file) {
            throw new Error('Tienes que subir una imagen');
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
        }
        }
    
        return true;
    })
];

/* Rutas controladores usuarios */

/* Registro usuario */
router.get('/register', users_controller.register);
router.post('/register', uploadFile.single('avatar'), validations , users_controller.add_user);

/** Login usuario */
router.get('/login', users_controller.login);
router.post('/login', [
    check('email').isEmail().withMessage('Email inválido'),
    check('password').isLength({min: 8}).withMessage('La contraseña debe tener como mínimo 8 caracteres')
], users_controller.process_login);

module.exports = router;