const path = require('path');
const { validationResult, body } = require('express-validator');

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
        let acceptedExtensions = ['.jpg', '.png', '.jpeg'];
        
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

module.exports = validations;