const Cart = require('../models/Cart');
const wrapAsync = require('../utils/wrapAsync');

exports.getCartItems = async (req, res, next) => {
  const cartItems = await Cart.findAll();
  const totalPrice = cartItems.reduce((acc, curVal) => {
    return acc + curVal.price;
  }, 0);

  res.status(200).json({
    status: 'Success',
    count: cartItems.length,
    totalPrice,
    cartItems,
  });
};

exports.addCartItem = wrapAsync(async (req, res, next) => {
  await Cart.create(req.body);
  res.status(200).json({
    status: 'Item Added to cart',
  });
});
