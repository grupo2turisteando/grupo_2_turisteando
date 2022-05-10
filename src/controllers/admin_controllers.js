/* Este controlador "admin_controllers" implementa todos los metodos para
administrar el sitio web */
const access_database= require('../model/access_database.js');
const engine_json= require('../model/engine.js');

const admin_controllers = {
        get_package: (req, res) => {
                        res.status(200).render('../views/products/package_form');
        },
        post_package: (req, res) => {
            // para procesar el formulario
            let data_package= req.body;
            /* grabo los datos */
            engine.add_columm('productos', data_package);
            res.redirect('/admin');
        },
        /* metodo para mostrar un paquete */
        get_package_view: (req, res) => {
            //let package= access_database.package_db( )
            //res.status(200).render('../views/products/package_view', {package: package});
            res.status(200).render('../views/admin');
        },
        get_package_update: (req, res) => {
            let package_id= req.params.id;
            let package= engine.read_columm('productos', package_id); 
            res.status(200).render('../views/products/package_update', {package: package[0]});
        },
        put_package_update: (req, res) => {
            let data_package= req.body;
            /* update los datos */
            engine.edit_columm('productos', data_package);
            res.redirect('/admin');
        },
        
        get_package_list: (req, res) => {
            let package_table= engine.browse_table('productos');
            res.status(200).render('../views/productos_admin', {package_table: package_table});
        }

};

module.exports = admin_controllers;