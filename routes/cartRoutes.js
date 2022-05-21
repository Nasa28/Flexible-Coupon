const express = require('express');
const { getCartItems, addCartItem } = require('../controllers/cartController');

const router = express.Router();

router.route('/').get(getCartItems).post(addCartItem);

module.exports = router;
