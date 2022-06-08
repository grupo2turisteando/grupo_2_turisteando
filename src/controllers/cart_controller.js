const access_database= require('../model/access_database.js');
const { browse_table, write_json } = require('../model/engine.js');
const engine= require('../model/engine.js'); // con este modulo operamos la base de datos
const {validationResult}= require("express-validator");


const cart_controller = {
    show_cart :  (req, res) => {
            let data_show_cart= engine.browse_table("cart");
            
/* Funcion nativa  para pasar a tipo  el "string" package.price
 let precio = (data_show_cart.package_price);
var total_cart = data_show_cart.reduce((sum, value) => (typeof precio == "" ? sum + precio_ : sum), 0);*/
               
    res.status(200).render('../views/productCart', {data_show_cart : data_show_cart })
    },
    
    add_item :   (req, res) => {
       
        const list_package = engine.browse_table("productos");
        let data_add_cart =req.params.id
        let data_body_cart = req.body
        let usuario =req.session.user_logged
        console.log(req.session)
        
        let data_show_cart = list_package.filter(elemento=>elemento.package_id == data_add_cart)
        let cart_history = engine.add_columm("cart",data_show_cart[0]);

            data_show_cart= engine.browse_table("cart");
         
              
            res.status(200).redirect("/cart")
                 
            },
           
    delete_item : (req, res) => {
        let data_delete_cart = req.params.id;
        engine.delete_columm("cart", data_delete_cart)        
        res.redirect("/cart")          
            },
        
    cart_form :  (req, res) => {
        let usuario =req.session.user_logged
        data_show_cart= engine.browse_table("cart");
         
          let users_purchase = {
                id: usuario.id,
                user: usuario.user,
                user_email : usuario.email,
                purchase: data_show_cart
                 }
                 
            engine.add_columm("userPurchase", users_purchase);
             res.render("../views/cartForm");
             },

    process_cart_form: (req,res)=>{
        let data_purchese = req.body
     
 
        data_purchese.age= parseFloat(data_purchese.age); 
        data_purchese.identity_document= parseFloat(data_purchese.identity_document); 
        data_purchese.postal_code= parseFloat(data_purchese.postal_code); 
        data_purchese.phone_number= parseFloat(data_purchese.phone_number); 
        data_purchese.card_number= parseFloat(data_purchese.card_number);
        data_purchese.security_code= parseFloat(data_purchese.security_code);  
        console.log(data_purchese)
        const result_validation_cart = validationResult(req);
            if (result_validation_cart.errors.length > 0){

        res.render("cartForm", { errors : result_validation_cart.mapped(), 
                                oldData: req.body})
            } else{
             
            engine.add_columm("user", data_purchese);   

            engine.browse_table("cart");
            let file_string= engine.read_json("cart");
            let file_new= file_string.filter( element => file_string[0] == undefined);
            engine.write_json("cart", file_new);
     
            res.status(200).render("../views/cartFinal");
          }
           
    }
    
};
module.exports= cart_controller;