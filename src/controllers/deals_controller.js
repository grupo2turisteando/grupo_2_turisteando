/* Este controlador "deals_controller" implementa todos los metodos para
manejar los productos */

/* cargo el manejador de los paquetes del modelo */
const data_paquetes = require('../model/data_paquetes.js');

const deals_controller = {
    deals: (req, res) => {
        res.status(200).render('../views/deals', {data_paquetes: data_paquetes });
    }
};

module.exports = deals_controller;