const Sequelize = require('sequelize');
const db = new Sequelize(`db_test02`, 'postgres', 'password', {
  dialect: 'postgres',
});

export default db;
