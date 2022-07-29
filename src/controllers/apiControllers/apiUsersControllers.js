
const db = require('../../../database/models');
const sequelize = db.sequelize;

const apiUsersControllers = {

list_register: (req,res)=>{
    db.UserRegister.findAll()
        .then(userregister=>{
            return res.status(200).json({
                meta:{
                    total: userregister.length,
                    status: 200,
                    url: "http://localhost:5020/api/users"
                },
                data: userregister,
               
            })
        
        })
        

},
detail: (req,res)=>{

}
};

module.exports = apiUsersControllers;