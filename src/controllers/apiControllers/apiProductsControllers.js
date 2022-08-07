const { get } = require("express/lib/request");
const db = require("../../../database/models");
const sequelize = db.sequelize;


const apiProductsControllers = {

    list: (req,res) => {
        db.Producto.findAll({
            attributes: [
                [sequelize.fn('COUNT', sequelize.col('package_id')),"packages"]
            ]
        })
        .then(product => {
            return res.json({
                meta: {
                    method: "get",
                    status: 200,
                    url: "http://localhost:5020/api/packages"
                },
                data: product,
            })
        })
    },
    detail: (req,res)=>{
    
    },
   
    };
    
    module.exports = apiProductsControllers