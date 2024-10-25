const { DataTypes } = require("sequelize");


module.exports = (sequelize, Sequelize) => {
    const Producto = sequelize.define("producto",
        {
            producto_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },

            nombre: {
                type: DataTypes.STRING,
                allowNull: true
            },

            precio: {
                type: DataTypes.FLOAT,
                allowNull: true
            },

            descripcion: {
                type: DataTypes.STRING,
                allowNull: true
            },

            imagen: {
                type: DataTypes.STRING,
                allowNull: true
            },
            imagenUno: {
                type: DataTypes.STRING,
                allowNull: true
            },
            imagenDos: {
                type: DataTypes.STRING,
                allowNull: true
            },
            imagenTres: {
                type: DataTypes.STRING,
                allowNull: true
            },



            disponible: {
                type: DataTypes.BOOLEAN,
                allowNull: true
            },


        });

    return Producto

}