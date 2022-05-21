const Coupon = require('../models/Coupon');
const ErrorMsg = require('../utils/ErrorMsg');

const processCoupon = async (
  couponCode,
  res,
  adjustedPrice,
  discountAmount,
  applied,
  cartItems
) => {
  await Coupon.create({
    couponCode,
    adjustedPrice,
    discountAmount,
    applied,
  });

  return res.status(200).json({
    status: 'Coupon Applied',
    couponCode,
    adjustedPrice,
    discountAmount,
    applied,
    cartItems,
  });
};

const FIXED10 = (cartItems, couponCode, res) => {
  const totalPrice = cartItems.reduce((acc, curVal) => {
    return acc + curVal.price;
  }, 0);

  if (totalPrice <= 50) {
    throw new ErrorMsg('Cart total price must be greater than $50');
  }
  const discountAmount = 10;
  const applied = true;
  const adjustedPrice = totalPrice - 10;

  processCoupon(
    couponCode,
    res,
    adjustedPrice,
    discountAmount,
    applied,
    cartItems
  );
};



module.exports = {
  FIXED10,
};
