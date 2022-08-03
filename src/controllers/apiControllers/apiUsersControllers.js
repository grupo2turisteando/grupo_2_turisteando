
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
       include:[{association:"province"}/*,{association:"userRegister"}*/],
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
    let user_id = req.params.id
        db.Customers.findByPk(user_id, {
            include:[{association:"province"}/*,{association:"userRegister"}*/],
        })
        .then(customer=>{
            res.status(200).json({
                meta:
                    {   
                    status: 200,
                    url: "http://localhost:5020/api/users/customers/`${user_id}`"
                    },
                data: customer,
            })
        })
        .catch( error => console.error(error));
},


// SOLO TRAE EL NUMERO DE CLIENTE
// last_customer: (req,res)=>{
//     db.Customers.findAll({
       
        
//         attributes:{
//            include:[
//             [sequelize.fn('MAX', sequelize.col('customer_id')),"ultimo_cliente_registrado"]
        
//            ]
//         } 
        
                       
//         })

last_customer: (req,res)=>{
    db.Customers.findAll({
        include:[{association:"userRegister"}/*,{association:"userRegister"}*/],
        limit:1,
        order: [
            ['customer_id', 'DESC'],
        ]
   
    })
        .then(customer=>{
            return res.json({
                meta:{
                    method: "get",
                    status: 200,
                    url: "http://localhost:5020/api/users/ultimo/customer",
                    url_avatar: "http://localhost:5020/images/users/avatars/"
    
                },
                data:customer,
               
            
            })
        })
   
}

}
module.exports = apiUsersControllers;