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
         email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
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
