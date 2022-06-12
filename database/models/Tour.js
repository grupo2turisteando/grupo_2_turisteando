module.exports = (sequelize, dataTypes) => {

    let alias = "Tour";
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

       description: {
        type: dataTypes.STRING(500),
        allowNull: false
       },

       description: {
        type: dataTypes.STRING(50),
        allowNull: true
       }
    };
    let config = {
        tableName: "tours",
        timestamps: false
    }

    const Tour = sequelize.define(alias, cols, config);

    return Tour; 

}