const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define(
      'Favorite',
      {
         id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
         },
         emailUser: {
            type: DataTypes.STRING,
            allowNull: false,
         },
         name: {
            type: DataTypes.STRING,
            allowNull: false,
         },
         status: {
            type: DataTypes.ENUM("Alive", "Dead", "unknown"),
            allowNull: false,
         },
         species: {
            type: DataTypes.STRING,
            allowNull: false,
         },
         gender: {
            type: DataTypes.ENUM("Female", "Male", "Genderless", "unknown"),
            allowNull: false,
         },
         origin: {
            type: DataTypes.JSON,
            allowNull: false,
            defaultValue: {
               name: "unknown"
            }
         },
         image: {
            type: DataTypes.STRING,
            allowNull: false,
         },

      },
      { timestamps: false }
   );
};
