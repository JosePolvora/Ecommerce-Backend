const { DataTypes } = require("sequelize");


module.exports = (sequelize, Sequelize) => {
    const Carrito = sequelize.define("carrito",
        {
            carrito_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },

            precio_total: {
                type: DataTypes.FLOAT,
                allowNull: true
            },
        });

    return Carrito

}