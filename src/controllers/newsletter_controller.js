//const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const db = require('../../database/models');
const Op = db.Sequelize.Op;

// requiero el paquete "date-and-time" para manejar el formato de fecha que vienen de la base de datos.
// ejemplo como vienen de la base de datos: "Mon Aug 15 2022 21:00:00 GMT-0300 (Argentina Standard Time)"."
const date = require('date-and-time');

/* cargo el manejador de los paquetes del modelo */
const engine = require('../model/engine.js');

const newsletter_controller = {
    new_register: (req, res) => {
        let register = req.body

        engine.add_columm_db("newsletter", register);

        res.status(200).redirect('/');
    }
};

module.exports = newsletter_controller;