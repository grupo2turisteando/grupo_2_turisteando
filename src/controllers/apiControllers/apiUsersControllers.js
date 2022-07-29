
const db = require('../../../database/models');
const sequelize = db.sequelize;

const apiUsersControllers = {

list: (req,res)=>{
    db.UserRegister.findAll()
        .then(userregister=>{
            return res.status(200).json({
                meta:{
                    total: userregister.length,
                    status: 200,
                    url:req.url
                },
                data: userregister,
            })
        })

},
detail: (req,res)=>{

}
};

module.exports = apiUsersControllers;