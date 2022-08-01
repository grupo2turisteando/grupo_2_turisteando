const db = require("../../../database/models");
const sequelize = db.sequelize;


const apiCategoriasControllers = {

    ofertas: (req, res) => {

        db.Producto
            .findAll({
                attributes: [[sequelize.fn('COUNT', sequelize.col('package_category')), 'ofertas']],
                where: {package_category: '2' }

              })
            .then(peliculas => {
                return res.json({
                    data: peliculas
                })
            })

    }

    
};

module.exports = apiCategoriasControllers;
    
