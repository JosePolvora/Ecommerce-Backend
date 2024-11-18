const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Cupon = sequelize.define("cupon",
        {
            cupon_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            codigo: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            descuento: {
                type: DataTypes.INTEGER,
            }
        },
        {
            tableName: "cupones",
            timestamps: true,
        }
    
    );

    return Cupon;
};