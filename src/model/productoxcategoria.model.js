const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Productoxcategoria = sequelize.define("productoxcategoria",
        {
            productoxcategoria_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },

            estado: {
                type: DataTypes.STRING,
                allowNull: true
            },
        });

    return Productoxcategoria;
}