const db = require("../../../database/models");
const sequelize = db.sequelize;


const apiCategoriasControllers = {

    ofertas: (req, res) => {

        db.Producto
            .findAll()
            .then(peliculas => {
                return res.json(peliculas)
            })

    }

    
};

module.exports = apiCategoriasControllers;
    
