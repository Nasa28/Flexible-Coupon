const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  'flexible-coupon',
  process.env.DB_USERNAME,
  process.env.POSTGRES_PASSWORD,
  {
    dialect: 'postgres',
    host: 'host',
    port: 5432,
  }
);
module.exports = sequelize;
