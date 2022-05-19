const access_database= require('../model/access_database.js');
const { browse_table, write_json } = require('../model/engine.js');
const engine= require('../model/engine.js'); // con este modulo operamos la base de datos

const {validationResult}= require("express-validator");


const cart_controller = {
    show_cart :  (req, res) => {
            let data_show_cart= engine.browse_table("cart");
            res.status(200).render('../views/productCart', {data_show_cart:data_show_cart});
            },
      
    add_item :   (req, res) => {
       
        const list_package = engine.browse_table("productos");
        let data_add_cart =req.params.id
        let data_show_cart = list_package.filter(elemento=>elemento.package_id == data_add_cart)
        let cart_history = engine.add_columm("cart",data_show_cart[0]);
        data_show_cart= engine.browse_table("cart");
        res.status(200).render('../views/productCart', { data_show_cart: data_show_cart });
    },


    delete_item : (req, res) => {
        let data_delete_cart = req.params.id;
        engine.delete_columm("cart", data_delete_cart)        
        res.redirect("/cart")          
            },
        
    cart_form :  (req, res) => {
             res.render("../views/cartForm");
             },

    process_cart_form: (req,res)=>{
       const result_validation_cart = validationResult(req);
 
       
       if (result_validation_cart.errors.length > 0){
           res.render("cartForm", {
                errors : result_validation_cart.mapped()
           })
       }

    },
    
    purchase : (req, res) => {
        res.send("Comprar");
            },

    purchase_detail: (req, res) => {
        res.send("Ver detalle de Compra");
            },
            
   
    cart_final :  (req, res) => {
                    res.render("../views/cartFinal");
                            },
    
};
module.exports= cart_controller;