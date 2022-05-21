const express = require('express');
const { createCoupon, getCoupons } = require('../controllers/couponController');

const router = express.Router();

router.route('/').post(createCoupon).get(getCoupons);

module.exports = router;
