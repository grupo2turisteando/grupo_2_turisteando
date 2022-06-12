module.exports = (sequelize, dataTypes) => {

    let alias = "Province";
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
       }
    };
    let config = {
        tableName: "provinces",
        timestamps: false
    }

    const Province = sequelize.define(alias, cols, config);

    Province.associate = function(models){
        Province.hasMay(models.Hotel, {
            as: "hoteles",
            foreignKey: "province_id"
        });
           
    }

    return Province; 

}