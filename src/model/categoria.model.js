const { DataTypes } = require("sequelize");


module.exports = (sequelize, Sequelize) => {
    const Categoria = sequelize.define("categorias",
        {
            categoria_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },

            descripcion: {
                type: DataTypes.STRING,
                allowNull: true
            },
        });

    return Categoria

}