const { DataTypes } = require("sequelize");


module.exports = (sequelize, Sequelize) => {
    const Cliente = sequelize.define("cliente",
        {
            cliente_id: {
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

            telefono: {
                type: DataTypes.STRING,
                allowNull: true
            },

            correo: {
                type: DataTypes.STRING,
                allowNull: false,
                //unique: true
            },

            password: {
                type: DataTypes.STRING,
                allowNull: false
            },

        });

    return Cliente

}