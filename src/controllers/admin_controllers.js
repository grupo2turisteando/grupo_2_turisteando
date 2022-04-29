/* Este controlador "admin_controllers" implementa todos los metodos para
administrar el sitio web */


const admin_controllers = {
        post_package: (req, res) => {
        res.status(200).render('../views/products/package_form');
    }
};

module.exports = admin_controllers;