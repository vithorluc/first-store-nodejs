// router its used to exports and organize routes in and express application. 
const express = require('express'); 
// const path = require('path'); 
const router = express.Router(); 
// const adminData = require('./admin')
// const rootDir = require('../util/path');
const shopController = require('../controllers/shop');

router.get('/', shopController.getIndex); 

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart); 

router.post('/cart-delete-item', shopController.postCartDeleteProduct); 

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

module.exports = router; 