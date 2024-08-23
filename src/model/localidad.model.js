const { DataTypes } = require("sequelize");


module.exports = (sequelize, Sequelize) => {
    const Localidad = sequelize.define("localidade",
        {
            localidad_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },

            nombre: {
                type: DataTypes.STRING,
                allowNull: true
            },

            codigo_postal: {
                type: DataTypes.INTEGER,
                allowNull: true
            },

        });

    return Localidad

}