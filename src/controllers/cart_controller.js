const access_database= require('../model/access_database.js');
const { browse_table, write_json } = require('../model/engine.js');
const engine= require('../model/engine.js'); // con este modulo operamos la base de datos
const {validationResult}= require("express-validator");


const cart_controller = {
    show_cart :  (req, res) => {
            let data_show_cart= engine.browse_table("cart");
        
            /*
            for( let i = 0; i < data_show_cart.length; i ++){
        
              let price=(Number(data_show_cart[i].package_price ))       
                }*/
    res.status(200).render('../views/productCart', {data_show_cart : data_show_cart,
                                                     })
    },
    
    add_item :   (req, res) => {
       
        const list_package = engine.browse_table("productos");

        /*list_package.package_id= Number( list_package.package_id); 
        list_package.package_price= parseFloat(list_package.package_price); 
        list_package.package_q_days= Number( list_package.package_q_days); 
        list_package._starts_hotel= Number( list_package.package_q_days); 
        list_package.category= Number( list_package.category); 
        list_package.transportation= Number(list_package.transportation); 
        list_package.excursions= Number(list_package.excursions); 
        list_package.discount= Number(list_package.discount); */
        
        let data_add_cart =req.params.id
        let data_body_cart = req.body
        let usuario =req.session.user_logged
     
        
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
        
    purchase :  (req, res) => {
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

    process_purchase: (req,res)=>{
        let data_purchese = req.body
        
    
        const result_validation_cart = validationResult(req);
            if (result_validation_cart.errors.length > 0){

        res.render("cartForm", { errors : result_validation_cart.mapped(), 
                                oldData: req.body})
            } else{

                let usuario = req.session.user_logged;
                
                let users_purchase = {
                    id: usuario.id,
                    user: usuario.user,
                    user_email : usuario.email,
                    first_name: data_purchese.first_name,
                    last_name: data_purchese.last_name,
                    birth_date:data_purchese.birth_date,
                    age: data_purchese.age,
                    identity_document: data_purchese.identity_document,
                    home:data_purchese.home,
                    postal_code:data_purchese.postal_code,
                    province:data_purchese.province,
                    email_alternative: data_purchese.email_alternative,
                    phone_number:data_purchese.phone_number,
                    payment_method: data_purchese.payment_method,
                    card_number:data_purchese.card_number,
                    name_card_holder:data_purchese.name_card_holder,
                    expiration:data_purchese.expiration,
                    security_code:data_purchese.security_code,
                   
                     }
                        engine.add_columm("user", users_purchase);   
                        engine.delete_all_columm("cart");
        
            res.status(200).render("../views/cartFinal");
          }
           
    }
    
};
module.exports= cart_controller;