const { DataTypes } = require("sequelize");


module.exports = (sequelize, Sequelize) => {
    const Comentario = sequelize.define("comentario",
        {
            comentario_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },

            comentario: {
                type: DataTypes.STRING,
                allowNull: false
            },
        
        });

    return Comentario

}