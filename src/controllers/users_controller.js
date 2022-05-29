const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const engine = require('../model/engine.js');

const bcryptjs = require('bcryptjs');

const User = require('../model/Users.js');


const users_controller = {
    login: (req, res) => {
        res.status(200).render('../views/users/login')
    },
    
    process_login: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            let users_file = fs.readFileSync('data/users-prueba.json', {encoding: 'utf-8'});
            let users;
            if(users_file == "") {
                users = [];
            } else {
                users = JSON.parse(users_file);
            };

            for (let i = 0; i < users.length; i++) {
                if (users[i].email == req.body.email) {
                    if ( bcryptjs.compareSync(req.body.password, users[i].password)) {
                        let login_user = users[i];
                        break;
                    }
                }
            }
            
            if (login_user == undefined) {
                return res.status(200).render('../views/users/login', {errors: [
                    {msg: 'Contraseña incorrecta'}
                ]});
            }

            req.session.log_user = login_user;
            res.render('Usuario logeado');
        } else {
            return res.render('../views/users/login', {errors: errors.errors});
        }
    },

    register: (req, res) => {
        res.status(200).render('../views/users/register')
    },

    add_user: (req, res) => {
        const result_validation = validationResult(req);
        if (result_validation.errors.length > 0) {
            return res.render('../views/users/register', {
                errors: result_validation.mapped(),
                oldData: req.body
            });
        }
        // Chequea si el email ya está registrado en otro usuario
        let user_in_db = User.find_by_field('email', req.body.email);

        if (user_in_db) {
            return res.render('../views/users/register', {
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

    users_list: (req, res) => {
        let users_list = fs.readFileSync('users-prueba.json', {encoding: 'utf-8'});
        let users = JSON.parse(users_list);
        res.status(200).render('users_list', {'users': users})
    },

    view_users: (req, res) => {
        res.status(200).render('../views/users_admin')
    }
};

module.exports = users_controller;