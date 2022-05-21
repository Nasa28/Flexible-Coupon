const { DataTypes } = require('sequelize');

const sequelize = require('../db/database');

const Coupon = sequelize.define('coupon', {
  couponCode: {
    type: DataTypes.ENUM({
      values: ['FIXED10', 'PERCENT10', 'MIXED10', 'REJECTED10'],
    }),
  },
  //  cartItems: {
  //   type: DataTypes.ARRAY(DataTypes.JSON),
  // },
  adjustedPrice: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  discountAmount: {
    type: DataTypes.DOUBLE,
  },
  applied: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Coupon;
