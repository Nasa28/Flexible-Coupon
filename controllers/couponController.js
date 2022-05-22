const Cart = require('../models/Cart');
const wrapAsync = require('../utils/wrapAsync');
const ErrorMsg = require('../utils/ErrorMsg');

const {
  FIXED10,
  PERCENT10,
  MIXED10,
  REJECTED10,
} = require('../utils/couponRules');

exports.applyCoupon = wrapAsync(async (req, res, next) => {
  const { couponCode } = req.body;
  const valid_coupon_codes = ['FIXED10', 'PERCENT10', 'MIXED10', 'REJECTED10'];

  if (!valid_coupon_codes.includes(couponCode)) {
    throw new ErrorMsg(
      'This coupon code is not valid,Please, provide a valid coupon code',
      400
    );
  }
  const cartItems = await Cart.findAll();

  if (cartItems.length === 0) {
    throw new ErrorMsg('Cart must contain at least one item', 400);
  }

  if (couponCode === 'FIXED10') {
    FIXED10(cartItems, couponCode, res);
  }

  if (couponCode === 'PERCENT10') {
    PERCENT10(cartItems, couponCode, res);
  }

  if (couponCode === 'MIXED10') {
    MIXED10(cartItems, couponCode, res);
  }

  if (couponCode === 'REJECTED10') {
    REJECTED10(cartItems, couponCode, res);
  }
});
