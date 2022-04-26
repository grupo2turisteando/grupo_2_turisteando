/* Este controlador "product_controller" implementa todos los metodos para
manejar los productos */

const product_controller = {
    packages: (req, res) => {
        res.status(200).render('../views/packages');
    },
    deals: (req, res) => {
        res.status(200).render('../views/deals');
    },
    productDetail: (req, res) => {
        res.status(200).render('../views/productDetail');
    }
};

module.exports = product_controller;