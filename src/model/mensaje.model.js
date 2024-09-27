const { DataTypes } = require("sequelize");


module.exports = (sequelize, Sequelize) => {
    const Mensaje = sequelize.define("mensaje",
        {
            mensaje_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },

            nombre: {
                type: DataTypes.STRING,
                allowNull: false
            },

            apellido: {
                type: DataTypes.STRING,
                allowNull: false
            },

            email: {
                type: DataTypes.STRING,
                allowNull: false
            },

            celular: {
                type: DataTypes.STRING,
                allowNull: false
            },

            mensaje_enviar: {
                type: DataTypes.STRING,
                allowNull: false
            },
        
        });

    return Mensaje

}