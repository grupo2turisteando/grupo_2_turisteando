module.exports = (sequelize, dataTypes) => {

    let alias = "Producto";
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

       image: {
        type: dataTypes.STRING(150),
        allowNull: true
       },

       alt_image: {
        type: dataTypes.STRING(100),
        allowNull: false,
       },

       price: {
        type: dataTypes.DOUBLE,
        allowNull: false,
       },

       title: {
        type: dataTypes.STRING(150),
        allowNull: false,
       },

       q_days: {
        type: dataTypes.INTEGER,
        allowNull: false,
       },

       hotel_id: {
        type: dataTypes.INTEGER,
        allowNull: false,    
       },

       description: {
        type: dataTypes.STRING(500),
        allowNull: false,
       }, 

       date_admission: {
        type: dataTypes.DATE,
        allowNull: true,
       }, 

       index: {
        type: dataTypes.INTEGER,
        allowNull: false,
       }, 
       
       category: {
        type: dataTypes.INTEGER,
        allowNull: false,
       }, 
       
       excursions_id: {
        type: dataTypes.INTEGER,
        allowNull: true,
       }, 
       
       discount: {
        type: dataTypes.DECIMAL(5, 2),
        allowNull: false,
       }, 
       
       transportation: {
        type: dataTypes.INTEGER,
        allowNull: false,
       } 
  
    };
    let config = {
        tableName: "productos",
        timestamps: false
    }

    const Producto = sequelize.define(alias, cols, config);

    Producto.associate = function(models){
        Producto.belongsTo(models.Hotel, {
            as: "hotel",
            foreignKey: "hotel_id"
        });
        
        Producto.belongsTo(models.Tour, {
            as: "tour",
            foreignKey: "excursions_id"
        });
    }

    return Producto; 

}