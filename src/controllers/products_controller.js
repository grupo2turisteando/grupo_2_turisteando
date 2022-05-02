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
const package_path = 'C:/Users/wlesk/Documents/JavaScript/DH/proyecto_integrador_g2/grupo_2_turisteando/public/images/'

const products_controller = {
    productDetail: (req, res) => {
        let file = 'bariloche';
        let package = access_database.package_db(package_path, file)
        res.status(200).render('../views/productDetail', {package: package});
    }
};

module.exports = products_controller;