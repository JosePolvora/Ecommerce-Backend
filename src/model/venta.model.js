const { DataTypes } = require("sequelize");


module.exports = (sequelize, Sequelize) => {
    const Venta = sequelize.define("ventas",
        {
            venta_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },

            fecha: {
                type: DataTypes.DATE,
                allowNull: false
            },

            fecha_envio: {
                type: DataTypes.DATE,
                allowNull: false
            },

            estado: {
                type: DataTypes.STRING,
                allowNull: true
            },

            medio_depago: {
                type: DataTypes.STRING,
                allowNull: false
            },
        });

    return Venta

}