/* Este controlador "product_controller" implementa todos los metodos para
manejar los productos */

const deals_controller = {
    deals: (req, res) => {
        res.status(200).render('../views/deals');
    }
};

module.exports = deals_controller;