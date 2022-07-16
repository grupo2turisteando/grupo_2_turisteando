// seccion de modulos requiridos
const fs= require('fs');
const path= require('path');
const db = require('../../database/models');
const Op = db.Sequelize.Op;

/* defino las variables del entorno */
const path_relative= path.join(__dirname, '../../data/')


const engineCart = {

    browse_table_db_cart: function(name_table) {
        // se implemento el metodo "read_db para obtener los datos desde MySQL"
        return this.read_db_cart(name_table);
    },

    read_db_cart: function (name_table) {
        return db[name_table].findAll({
            include:[{association:"package"}, {association:"user"}],
            raw: true,
            nest: true,
        });
    },
    read_columm_db_cart: function(name_table, columm_table) {
        
        return registro = db[name_table].findAll( {
             where :{
                 user_id: columm_table
             },
             include:[{association:"package"}, {association:"user"}], 
                 raw: true,
                 nest: true,
             });
       
   
     }, 
 
     read_columm_db_customer: function (name_table, columm_table_id){
        let registro = db[name_table].findByPk(columm_table_id, {
            include: [{association:"userRegister"}, {association:"province"}]
                     });
        return registro;
    }, 

    // este metodo permite dar de alta una columm en la table de MySql
    add_columm_db_cart: function (name_table, object_add) {
        db[name_table].create(object_add);
        return 201 ;
    },
      
    edit_columm_db_cart: function(name_table, object_modified) {
        db[name_table].update(
            object_modified, {
            where: {
                user_id: object_modified.user_id
            }
        }, {
            include: [{association:"userRegister"}, {association:"province"}]
        });
        return 201;    
    }, 

    delete_columm_db_cart: function(name_table, columm_table_id) {
    db[name_table].destroy({
        where: {
            package_id: columm_table_id
         }
    });
        return 200;
    }, 

    delete_cart_fnal: function(name_table, columm_table_id) {
        db[name_table].destroy({
            where: {
                user_id: columm_table_id
            }
        });
        return 200;
    }, 

    porcentaje: function (precio, porcentaje,nro){
    return precio - (precio * porcentaje / nro)
    },
  
} 
module.exports = engineCart;