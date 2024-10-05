const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Imagen = sequelize.define("imagen",
        {
            imagen_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },

            ubicacion: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            nro_orden: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            tableName: "imagenes",
            timestamps: true,
        }
    );

    return Imagen;
};
