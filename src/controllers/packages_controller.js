/* Este controlador "packages_controller" implementa todos los metodos para
manejar los productos */

const packages_controller = {
    packages: (req, res) => {
        res.status(200).render('../views/packages');
    }
};

module.exports = packages_controller;