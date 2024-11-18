const { DataTypes } = require("sequelize");


module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define("usuario",
        {
            usuario_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },

            nombre: {
                type: DataTypes.STRING,
                allowNull: true
            },

            apellido: {
                type: DataTypes.STRING,
                allowNull: true
            },

            email: {
                type: DataTypes.STRING,
                allowNull: false
            },

            clave: {
                type: DataTypes.STRING,
                allowNull: false
            },

            fechaNacimiento: {
                type: DataTypes.DATE,
                allowNull: false
            },

            dni: {
                type: DataTypes.INTEGER,
                allowNull: false
            },

            rol: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: ''
            },

            activo: {
                type: DataTypes.STRING,
                allowNull: true
            },

        });

    return Usuario

}