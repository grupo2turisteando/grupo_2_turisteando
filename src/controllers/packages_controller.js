/* Este controlador "packages_controller" implementa todos los metodos para
manejar los productos */

/* cargo el manejador de los paquetes del modelo */
const data_paquetes = require('../model/data_paquetes.js');

const packages_controller = {
    packages: (req, res) => {
        res.status(200).render('../views/packages', {data_paquetes: data_paquetes });
    }
};

module.exports = packages_controller;