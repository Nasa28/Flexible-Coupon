const { DataTypes } = require('sequelize');

const sequelize = require('../db/database');

const Cart = sequelize.define('cart', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Cart;
