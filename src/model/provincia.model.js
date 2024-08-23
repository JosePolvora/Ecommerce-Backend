const { DataTypes } = require("sequelize");


module.exports = (sequelize, Sequelize) => {
    const Provincia = sequelize.define("provincias",
        {
            provincia_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },

            nombre: {
                type: DataTypes.STRING,
                allowNull: true
            },
        });

    return Provincia

}