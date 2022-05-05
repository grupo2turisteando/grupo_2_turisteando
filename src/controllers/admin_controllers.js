/* Este controlador "admin_controllers" implementa todos los metodos para
administrar el sitio web */
const access_database= require('../model/access_database.js');
const engine_json= require('../model/engine_json.js');

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
            //let package= access_database.package_db( )
            //res.status(200).render('../views/products/package_view', {package: package});
            res.status(200).render('../views/admin');
},
        // get_package_search: (req, res) => {
        //     let package_search= req.query.paquetes;
        //     let package= access_database.package_db(package_search)
        //     res.status(200).render('../views/products/package_view', {package: package});
        
            get_package_list: (req, res) => {
            let package_table= engine_json.browse_table('package')
            res.status(200).render('../views/productos_admin', {package_table: package_table});
},

};

module.exports = admin_controllers;