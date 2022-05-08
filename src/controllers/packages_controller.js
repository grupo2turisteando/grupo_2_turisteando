/* Este controlador "packages_controller" implementa todos los metodos para
manejar los productos */

/* cargo el manejador de los paquetes del modelo */
const data_paquetes = require('../model/data_paquetes.js');
const engine_json = require('../model/engine_json.js');

const packages_controller = {
    /*packages: (req, res) => {
        res.status(200).render('../views/packages', {data_paquetes: data_paquetes });
    },*/
    package: (req, res) => {
        res.status(200).render('../views/packages', {data_paquetes: data_paquetes });
    },
    post_package: (req, res) => {
    let data_package = req.body.id;
    engine_json.add_columm('productos', data_package);
    res.redirect('../views/productDetail');
    },
};

module.exports = packages_controller;