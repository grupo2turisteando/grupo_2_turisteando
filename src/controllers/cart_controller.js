const access_database= require('../model/access_database.js');
const engine= require('../model/engine.js'); // con este modulo operamos la base de datos

const cart_controller = {
    show_cart :  (req, res) => {
      
    res.status(200).render('../views/productCart');
    },
      
    add_item :   (req, res) => {
       
        let list_package = engine.browse_table("productos");

        let data_add_cart = req.params.id
    
        let data_show_cart = list_package.filter(elemento=>elemento.package_id == data_add_cart)
        
        console.log(data_show_cart)
    
        
        res.status(200).render('../views/productCart', { data_show_cart: data_show_cart });
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