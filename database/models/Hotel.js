module.exports = (sequelize, dataTypes) => {

    let alias = "Hotel";
    let cols = {

       id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
       },

       name: {
        type: dataTypes.STRING(100),
        allowNull: false
       },

       stars: {
        type: dataTypes.INTEGER,
        allowNull: true
       },

       addess: {
        type: dataTypes.STRING(150),
        allowNull: false,
       },

       city: {
        type: dataTypes.STRING(100),
        allowNull: false,
       },

       province_id: {
        type: dataTypes.INTEGER,
        allowNull: false,
       },

       mail: {
        type: dataTypes.STRING(150),
        allowNull: false,
       },

       phone: {
        type: dataTypes.STRING(150),
        allowNull: false,    
       }
  
    };
    let config = {
        tableName: "hotels",
        timestamps: false
    }

    const Hotel = sequelize.define(alias, cols, config);

    Hotel.associate = function(models){
        Hotel.hasMay(models.Producto, {
            as: "productos",
            foreignKey: "hotel_id"
        });
        
        Hotel.belondsToMay(models.Province, {
            as: "province",
            foreignKey: "province_id"
        });
    
    }

    return Hotel; 

}