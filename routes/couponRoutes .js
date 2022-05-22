const express = require('express');
const { applyCoupon } = require('../controllers/couponController');

const router = express.Router();

router.route('/').post(applyCoupon);

module.exports = router;
