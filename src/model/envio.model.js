const { DataTypes } = require("sequelize");


module.exports = (sequelize, Sequelize) => {
    const Envio = sequelize.define("envio",
        {
            envio_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },

            metodo_envio: {
                type: DataTypes.STRING,
                allowNull: true
            },

            precio_envio: {
                type: DataTypes.DECIMAL,
                allowNull: false
            },

            estado: {
                type: DataTypes.STRING,
                allowNull: true
            },

            fecha_envio: {
                type: DataTypes.DATE,
                allowNull: false
            },

        });

    return Envio

}