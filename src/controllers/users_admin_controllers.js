const { users_list } = require("./users_controller");
const engine= require('../model/engine.js');
const { find_columm } = require("../model/engine.js");

const users_admin_controller = {

    /*Nostrar todos usuarios Registrados*/
    users_list: (req, res) => {
       
        let users_table= engine.browse_table('users-prueba');
        res.status(200).render('../views/users_admin', {users_table: users_table});
    },
    show_user :  (req, res) => {
        let user_id= req.params.id;
        let user= engine.read_columm('users-prueba', user_id); 
        res.status(200).render("../views/user_admin_detail", {user: user[0]}); 
           
        },
        
      
      
    edit_user_get: (req, res) => {
        let user_id= req.params.id;
        let user= engine.read_columm('users-prueba', user_id); 
        res.status(200).render("../views/users/users_edit", {user: user[0]}); //como envio un objeto literal uso el indice cero del array
    }
}






module.exports = users_admin_controller;