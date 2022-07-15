const fs = require('fs');
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');

const User = require('../model/Users.js');

const db = require('../../database/models');
const UserRegister = require('../../database/models/UserRegister.js');


const users_controller = {
    login: (req, res) => {
        res.status(200).render('../views/users/login')
    },

    //-------------- proceso de login
    user_login: async (req, res) => {
        await db.UserRegister.findOne({
            where: {email: req.body.email}
        }).then(user_to_login => {
            if (user_to_login) {
                let password_compare = bcryptjs.compareSync(req.body.password, user_to_login.password)
                
                if (password_compare) {
                    delete user_to_login.password;
                    delete user_to_login.password_valid;
                    req.session.user_logged = user_to_login;
                    //console.log(user_to_login);
                    if (req.body.remember_user) {
                        res.cookie('user_email', req.body.email, { maxAge: (1000 * 60 ) * 10 });
                    }
                    return res.redirect('../users/profile');
                };
                
                return res.status(200).render('../views/users/login', {
                    errors: {
                        password: {
                            msg: 'La contraseña es incorrecta. Vuelve a intentarlo'
                        }
                    },
                oldData: req.body
                });
            }
                
            
            return res.status(200).render('../views/users/login', {
                errors: {
                    email: {
                        msg: 'No se encuentra este email en nuestra base de datos'
                    }
                },
            oldData: req.body
            });
            

        // if (user_in_db) {
        //     let password_compare = bcryptjs.compareSync(req.body.password, user_password)
        //     if (password_compare) {
        //         req.session.user_logged = user_to_login;

        //         if (req.body.remember_user) {
        //             res.cookie('user_email', req.body.email, { maxAge: (1000 * 60 ) * 10 });
        //         }

        //         return res.redirect('../users/profile');
        //     }

        //     return res.status(200).render('../views/users/login', {
        //         errors: {
        //             password: {
        //                 msg: 'La contraseña es incorrecta. Vuelve a intentarlo'
        //             }
        //         },
        //         oldData: req.body
        //     });
        // }
        })
    },
    //----------------------------------

    
    process_login: (req, res) => {
        let user_to_login = User.find_by_field('email', req.body.email);
        
        if (user_to_login) {
            let password_compare = bcryptjs.compareSync(req.body.password, user_to_login.password)
            if (password_compare) {
                delete user_to_login.password;
                delete user_to_login.password_valid;
                req.session.user_logged = user_to_login;

                if (req.body.remember_user) {
                    res.cookie('user_email', req.body.email, { maxAge: (1000 * 60 ) * 10 });
                }

                return res.redirect('../users/profile');
            }
            return res.status(200).render('../views/users/login', {
                errors: {
                    password: {
                        msg: 'La contraseña es incorrecta. Vuelve a intentarlo'
                    }
                },
                oldData: req.body
            });
        }

        return res.status(200).render('../views/users/login', {
            errors: {
                email: {
                    msg: 'No se encuentra este email en nuestra base de datos'
                }
            },
            oldData: req.body
        });
    },

    register: async (req, res) => {
        res.status(200).render('../views/users/register')
    },

    // ------ crear usuario con db ---------------------
    create_user: (req, res) => {
        //validaciones formulario registro
        const result_validation = validationResult(req);
        if (result_validation.errors.length > 0) {
            return res.status(200).render('../views/users/register', {
                errors: result_validation.mapped(),
                oldData: req.body
            });
        } else {
        //metodo create para registrar user en db
            db.UserRegister.create({
                user: req.body.user,
                email: req.body.email,
                password: bcryptjs.hashSync(req.body.password, 10),
                password_valid: bcryptjs.hashSync(req.body.password_valid, 10),
                avatar: req.file.filename
            });
            res.status(200).redirect('/users/login');
        };
        
        //Chequea que el email no este registrado
        // let user_in_db = db.UserRegister.findOne({
        //     where: {email: req.body.email}
        // });

        // if (user_in_db) { 
        //     return res.status(200).render('../views/users/register', {
        //         errors: {
        //             email: {
        //                 msg: 'Este email ya está registrado'
        //             }
        //         },
        //         oldData: req.body
        //     });
        // } 
    },
    // ----------------------------------

    process_register: (req, res) => {
        const result_validation = validationResult(req);
        if (result_validation.errors.length > 0) {
            return res.status(200).render('../views/users/register', {
                errors: result_validation.mapped(),
                oldData: req.body
            });
        }
        // Chequea si el email ya está registrado en otro usuario
        let user_in_db = User.find_by_field('email', req.body.email);

        if (user_in_db) {
            return res.status(200).render('../views/users/register', {
                errors: {
                    email: {
                        msg: 'Este email ya está registrado'
                    }
                },
                oldData: req.body
            });
        }

        //Crea el usuario con la encriptacion de la password
        let user_to_create = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            password_valid: bcryptjs.hashSync(req.body.password_valid, 10),
            avatar: req.file.filename
            }

            let user_created = User.create(user_to_create);

            return res.status(200).redirect('/users/login');
    },

    profile: async (req, res) => {
        return res.status(200).render('../views/users/user_profile', {
            user: req.session.user_logged
        });
    },

    edit: async (req, res) => {
        let user = await db.UserRegister.findByPk(req.params.id)
        console.log(user);

        res.status(200).render('../views/users/user_edit', {user: user})
    },

    actualizar: async (req, res) => {
        let data_user = req.body;
       
        let user_update = await db.UserRegister.update({
            user_id:req.params.id,
            user: data_user.user,
            email:  data_user.email,
            password:  data_user.password,
            password_valid: data_user.password_valid,
            avatar: data_user.avatar
       
        }, {
            where: {user_id: req.params.id}
        });
        console.log(user_update);

        res.redirect('/users/profile')
    },
 
    logout: (req, res) => {
        res.clearCookie('user_email');
        req.session.destroy();
        return res.status(200).redirect('/index')
    }

    // users_list: (req, res) => {
    //     let users_list = fs.readFileSync('users-prueba.json', {encoding: 'utf-8'});
    //     let users = JSON.parse(users_list);
    //     res.status(200).render('users_list', {'users': users})
    // }

    // view_users: (req, res) => {
    //     res.status(200).render('../views/users_admin')
    // }
};

module.exports = users_controller;