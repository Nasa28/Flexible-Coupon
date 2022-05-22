const { Sequelize } = require('sequelize');
require('dotenv').config();

let sequelize;
if (process.env.NODE_ENV === 'production') {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  });
} else if (process.env.NODE_ENV === 'development') {
  sequelize = new Sequelize(
    'flexible-coupon',
    process.env.DB_USERNAME,
    process.env.POSTGRES_PASSWORD,
    {
      dialect: 'postgres',
      host: 'localhost',
    }
  );
}

module.exports = sequelize;
