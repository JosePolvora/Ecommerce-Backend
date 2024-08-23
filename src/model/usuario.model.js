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

            correo: {
                type: DataTypes.STRING,
                allowNull: false,
                
            },

            password: {
                type: DataTypes.STRING,
                allowNull: false
            },

            rol: {
                type: DataTypes.STRING,
                allowNull: true
            },

        });

    return Usuario

}