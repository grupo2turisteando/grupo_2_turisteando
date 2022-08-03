
const db = require('../../../database/models');
const { get } = require('../../routes/routesApi/apiUsers');
const sequelize = db.sequelize;

const apiUsersControllers = {

list_register: (req,res)=>{
    db.UserRegister.findAll()
        .then(userregister=>{
            return res.status(200).json({
                meta:{
                    total: userregister.length,
                    status: 200,
                    url: "http://localhost:5020/api/users/register"
                },
                data: userregister,
               
            })
        
        })
        

},
list_customers: (req,res)=>{
    db.Customers.findAll({
        include:[{association:"province"},{association:"userRegister"}]
    })
        .then(customers=>{
            return res.status(200).json({
                meta:
                {   
                   
                    total: customers.length,
                    status: 200,
                    url: "http://localhost:5020/api/users/customers"
                },
                data: customers,
               
            })
        
        })
        

},
detail_register: (req,res)=>{

},
detail_customers: (req,res)=>{
}
}
module.exports = apiUsersControllers;