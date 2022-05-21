const fs = require('fs');
const path= require('path');
const { check, validationResult, body } = require('express-validator');
const engine = require('../model/engine.js');




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
                    if ( bcrypt.compareSync(req.body.password, users[i].password)) {
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
        let user = {
            id: 0,
            nombre: req.body.usuario,
            email: req.body.email,
            password: req.body.password,
            password_valid: req.body.password_valid
        };

        /* Guardar usuario*/
        /** Leer JSON */
        let users_file = fs.readFileSync('data/users-prueba.json', {encoding: 'utf-8'});
        let users;
        if(users_file == "") {
            users = [];
        } else {
            users = JSON.parse(users_file);
        };

        /** Agregar id user */ 
        user.id = users.length + 1;

        users.push(user);

        usersJSON = JSON.stringify(users);
        /** Reescribir JSON */
        fs.writeFileSync('data/users-prueba.json', usersJSON);

        res.status(200).redirect('/users/login'); //ruta de cierre del metodo POST
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