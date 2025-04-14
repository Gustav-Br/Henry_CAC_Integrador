require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_BDD } = process.env;
const UserModel = require('./models/User');
const FavoriteModel = require('./models/Favorite');


// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(
      `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_BDD}`,
      { logging: false, native: false }
);


UserModel(sequelize);
FavoriteModel(sequelize);

// ¡Relacionar los modelos
const { User, Favorite } = sequelize.models;

User.belongsToMany(Favorite, { through: 'user_favorite' });
Favorite.belongsToMany(User, { through: 'user_favorite' });

module.exports = {
      User,
      Favorite,
      conn: sequelize,
};