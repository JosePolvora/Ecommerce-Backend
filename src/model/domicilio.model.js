const { DataTypes } = require("sequelize");


module.exports = (sequelize, Sequelize) => {
    const Domicilio = sequelize.define("domicilio",
        {
            domicilio_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },

            calle: {
                type: DataTypes.STRING,
                allowNull: true
            },

            numero: {
                type: DataTypes.INTEGER,
                allowNull: true
            },

            piso: {
                type: DataTypes.INTEGER,
                allowNull: true
            },

            departamento: {
                type: DataTypes.STRING,
                allowNull: true,
            },

        });

    return Domicilio

}