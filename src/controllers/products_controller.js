/* Este controlador "products_controller" implementa todos los metodos para
manejar los productos */

// const products_controller = {
//     packages: (req, res) => {
//         res.status(200).render('../views/packages');
//     },
//     deals: (req, res) => {
//         res.status(200).render('../views/deals');
//     },
//     productDetail: (req, res) => {
//         res.status(200).render('../views/productDetail');
//     }
// };

// module.exports = products_controller;

const access_database = require('../model/access_database.js');
const engine_json = require('../model/engine_json.js');

const products_controller = {
    /*productDetail: (req, res) => {
        let package = access_database.package_db();
        res.status(200).render('../views/productDetail', { package: package });
    },*/
    show_product: (req, res) => {
        let package_id = req.params.id;
        let package = engine_json.read_columm('productos', package_id); 
        res.status(200).render('../views/productDetail', { package: package[0] });
    },
};

module.exports = products_controller;