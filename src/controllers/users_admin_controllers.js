const { users_list } = require("./users_controller");
const engine= require('../model/engine.js');
const { find_columm } = require("../model/engine.js");
const req = require("express/lib/request");

const users_admin_controller = {


      
 
    /*Mostrar todos usuarios Registrados*/
    users_list: (req, res) => {
       
        let users_table= engine.browse_table('users-prueba');
        res.status(200).render('../views/users_admin', {users_table: users_table});
      
    },
    /*Mostrar detalle del Usuario*/
    show_user :  (req, res) => {
        let user_id= req.params.id;
        let user= engine.read_columm('users-prueba', user_id); 
     
        res.status(200).render("../views/user_admin_detail", {user: user[0]}); 
           
        },
    /*Editar los campos de un Usuario*/
    edit_user_get: (req, res) => {
        let user_id= req.params.id;

        let user= engine.read_columm('users-prueba', user_id); 
        let user2= engine.read_columm('user', user_id); 
     
        res.status(200).render("../views/users/user_edit", {user: user[0], user2:user2[0]}); //como envio un objeto literal uso el indice cero del array
    },
    edit_user_put: (req, res)=>{
        data_user = req.body
 
        data_user.id = Number(data_user.id)
    
        /* update los datos */
        let old_users= engine.read_columm('users-prueba', data_user.id);
   
        
   
        /* actualizo la base de datos */
        engine.edit_columm('user', data_user);

        res.redirect('/admin');
    },
    
     /*Muestra el Usuario a Eliminar */
    delete_user_get: (req, res)=>{
        let user_id= req.params.id
        let user= engine.read_columm("users-prueba", user_id);
        res.status(200).render("../views/users/user_delete", {user : user[0]});    
    },
   
     /* Elimina un usuario*/
    delete_user_delete: (req, res)=>{
        let user_id = req.params.id
        engine.delete_columm("users-prueba", user_id);
       
        res.redirect("/admin/users");
        }
    }

module.exports = users_admin_controller;