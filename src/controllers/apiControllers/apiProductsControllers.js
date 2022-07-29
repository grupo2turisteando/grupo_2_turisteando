const db = require("../../../database/models");
const sequelize = db.sequelize;


const apiProductsControllers = {

    list: (req,res)=>{
        db.Transaction.findAll({
        include:[{association:"user"}, {association:"customer"}]
    })
        .then(transaction=>{
            return res.status(200).json({
                meta:
                {
                    total: transaction.length,
                    status: 200,
                    url: "http://localhost:5020/api/products"
                },
                data:transaction,
            })
        })

    
    },
    detail: (req,res)=>{
    
    },
    transaction_list: (req,res)=>{
        db.Transaction.findAll({
            include:[{association:"user"}, {association:"customer"}]
        })
            .then(transaction=>{
                return res.status(200).json({
                    meta:
                    {
                        total: transaction.length,
                        status: 200,
                        url: "http://localhost:5020/api/products"
                    },
                    data:transaction,
                })
            })
    
    }
    };
    
    module.exports = apiProductsControllers