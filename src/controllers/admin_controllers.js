/* Este controlador "admin_controllers" implementa todos los metodos para
administrar el sitio web */
const access_database= require('../model/access_database.js');

const admin_controllers = {
        get_package: (req, res) => {
                        res.status(200).render('../views/products/package_form');
        },
        post_package: (req, res) => {
            // para procesar el formulario
            let data_package= req.body;
            /*res.redirect('/crear');*/
            res.send(data_package);
        },
        /* metodo para mostrar un paquete */
        get_package_view: (req, res) => {
            let file= 'bariloche';
            let package= access_database.package_db( )
            res.status(200).render('../views/products/package_view', {package: package});
},
        get_package_search: (req, res) => {
            let package_search= req.query.paquetes;
            let package= access_database.package_db(package_search)
            res.status(200).render('../views/products/package_view', {package: package});
},

};

module.exports = admin_controllers;