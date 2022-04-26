/* Este controlador "paquetes_controllers" implementa todos los metodos para
manejar los paquetes */


/* cargo el manejador de los paquetes del modelo */
const data_paquetes = require('../model/data_paquetes.js');

const paquetes_controllers = {
    index_home: (req, res) => {
        res.render('../views/index', {data_paquetes: data_paquetes});
    },
    packages: (req, res) => {
        res.render('../views/packages');
    }
};

module.exports = paquetes_controllers;