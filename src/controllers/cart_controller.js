const access_database= require('../model/access_database.js');
const engine= require('../model/engine.js'); // con este modulo operamos la base de datos

const cart_controller = {
    show_cart :  (req, res) => {
        let package = access_database.package_db();
        res.status(200).render('../views/productCart', { package: package });
    },
      
    add_item :   (req, res) => {
        res.send("Agregar un paquete");         
            },

    delete_item : (req, res) => {
        res.send("Eliminar paquete");             
            },
    
    purchase : (req, res) => {
        res.send("Comprar");
            },

    purchase_detail: (req, res) => {
        res.send("Ver detalle de Compra");
            },
            
    cart_form :  (req, res) => {
                res.render("../views/cartForm");
                    },
    cart_final :  (req, res) => {
                    res.render("../views/cartFinal");
                            },
};
module.exports= cart_controller;