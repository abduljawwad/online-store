const Sequelize = require('sequelize');
require('dotenv').config();

const db = new Sequelize(
  `${process.env.DB}`,
  `${process.env.DB_USERNAME}`,
  `${process.env.DB_PASSWORD}`,
  {
    dialect: 'postgres',
  }
);

export default db;
