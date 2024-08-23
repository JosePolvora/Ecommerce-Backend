const { DataTypes } = require("sequelize");


module.exports = (sequelize, Sequelize) => {
    const Imagen = sequelize.define("imagene",
        {
            imagen_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },

            nombre: {
                type: DataTypes.STRING,
                allowNull: true
            },

            descripcion: {
                type: DataTypes.STRING,
                allowNull: true
            },

        });

    return Imagen

}