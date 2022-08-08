const { get } = require("express/lib/request");
const db = require("../../../database/models");
const sequelize = db.sequelize;


const apiProductsControllers = {

    list: (req,res) => {
        db.Producto.findAll({
            attributes: [
                [sequelize.fn('COUNT', sequelize.col('package_id')),"products"]
            ]
        })
        .then(product => {
            return res.json({
                meta: {
                    method: "get",
                    status: 200,
                    url: "http://localhost:5020/api/products"
                },
                data: product,
            })
        })
    },
    detail: (req,res)=>{
        db.Producto.findAll({
            attributes: [
                ["package_name", "producto"]
            ]
        })
        .then(product => {
            return res.json({
                meta: {
                    method: "get",
                    status: 200,
                    url: "http://localhost:5020/api/products/:id"
                },
                data: product,              
            })
        })
    },
   
    };
    
    module.exports = apiProductsControllers