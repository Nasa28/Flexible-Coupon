const Coupon = require('../models/Coupon');
const ErrorMsg = require('../utils/ErrorMsg');

const processCoupon = async (
  couponCode,
  res,
  originalPrice,
  adjustedPrice,
  discountAmount,
  cartItems
) => {
  await Coupon.create({
    couponCode,
    adjustedPrice,
    discountAmount,
  });

  return res.status(200).json({
    status: 'Coupon Applied',
    couponCode,
    originalPrice,
    adjustedPrice,
    discountAmount,
    cartItems,
  });
};

const FIXED10 = (cartItems, couponCode, res) => {
  const totalPrice = cartItems.reduce((acc, curVal) => {
    return acc + curVal.price;
  }, 0);

  if (!totalPrice > 50) {
    throw new ErrorMsg('Cart total price must be greater than $50');
  }
  const discountAmount = 10;
  const adjustedPrice = totalPrice - discountAmount;
  processCoupon(
    couponCode,
    res,
    (originalPrice = totalPrice),
    adjustedPrice,
    discountAmount,
    cartItems
  );
};

const PERCENT10 = (cartItems, couponCode, res) => {
  const totalPrice = cartItems.reduce((acc, curVal) => {
    return acc + curVal.price;
  }, 0);

  if (cartItems.length < 2 || !(totalPrice > 100)) {
    throw new ErrorMsg(
      'Cart must have at least 2 items and Cart total must be greater than $100'
    );
  }

  const discountAmount = Math.floor(totalPrice * (10 / 100));
  const adjustedPrice = totalPrice - discountAmount;

  processCoupon(
    couponCode,
    res,
    (originalPrice = totalPrice),
    adjustedPrice,
    discountAmount,
    cartItems
  );
};

const MIXED10 = (cartItems, couponCode, res) => {
  const totalPrice = cartItems.reduce((acc, curVal) => {
    return acc + curVal.price;
  }, 0);

  if (cartItems.length < 3 || !(totalPrice > 200)) {
    throw new ErrorMsg(
      'Cart must have at least 3 items and Cart total must be greater than $200'
    );
  }

  const compareDiscount = (discount_fixed10, discount_percent) => {
    if (discount_fixed10 > discount_percent) {
      return discount_fixed10;
    } else {
      return discount_percent;
    }
  };

  const discount_percent = Math.floor(totalPrice * (10 / 100));
  const discount_fixed10 = 10;
  const discountAmount = compareDiscount(discount_fixed10, discount_percent);
  const adjustedPrice = totalPrice - discountAmount;

  processCoupon(
    couponCode,
    res,
    (originalPrice = totalPrice),
    adjustedPrice,
    discountAmount,
    cartItems
  );
};

const REJECTED10 = (cartItems, couponCode, res) => {
  const totalPrice = cartItems.reduce((acc, curVal) => {
    return acc + curVal.price;
  }, 0);

  if (!(totalPrice > 1000)) {
    throw new ErrorMsg(' Cart total must be greater than $1000');
  }

  const discount_percent = Math.floor(totalPrice * (10 / 100));
  const discount_fixed10 = 10;
  const discountAmount = discount_percent + discount_fixed10;
  const adjustedPrice = totalPrice - discountAmount;

  processCoupon(
    couponCode,
    res,
    (originalPrice = totalPrice),
    adjustedPrice,
    discountAmount,
    cartItems
  );
};

module.exports = {
  FIXED10,
  PERCENT10,
  MIXED10,
  REJECTED10,
};
