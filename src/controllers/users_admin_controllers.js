const { users_list } = require("./users_controller");
const engine= require('../model/engine.js')

const users_admin_controller = {
    users_list: (req, res) => {
        let users_table= engine.browse_table('users-prueba');
        res.status(200).render('../views/users_admin', {users_table: users_table});
    }
    }






module.exports = users_admin_controller;