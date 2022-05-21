const Cart = require('../models/Cart');
const wrapAsync = require('../utils/wrapAsync');

exports.getCartItems = async (req, res, next) => {
  const cartList = await Cart.findAll();
  const cart_total = cartList.reduce((acc, curVal) => {
    return acc + curVal.price;
  }, 0);

  res.status(200).json({
    status: 'Success',
    cart_total,
    cartList,
  });
};

exports.addCartItem = wrapAsync(async (req, res, next) => {
  const { name, price } = req.body;
  const newProduct = await Cart.create(req.body);
  res.status(200).json({
    status: 'Item Added to cart',
  });
});
