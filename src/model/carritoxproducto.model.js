const { DataTypes } = require("sequelize");


module.exports = (sequelize, Sequelize) => {
    const Carritoxproducto = sequelize.define("carritoxproducto",
        {
            carritoxproducto_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },

            cantidad: {
                type: DataTypes.INTEGER,
                allowNull: true
            },

            precio_unitario: {
                type: DataTypes.FLOAT,
                allowNull: true
            },

        });

    return Carritoxproducto

}