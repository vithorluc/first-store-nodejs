// router its used to exports and organize routes in and express application. 
const express = require('express');
const path = require('path'); 
const router = express.Router(); 
// const rootDir = require('../util/path');
const adminController = require('../controllers/admin');


// /admin/add-product => GET 
router.get('/add-product', adminController.getAddProduct); 

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

// /admin/products => GET 
router.get('/products', adminController.getProducts);

router.get('/edit-product/:productId', adminController.getEditProduct);

router.post('/edit-product', adminController.postEditProduct); 

router.post('/delete-product', adminController.postDeleteProduct);

module.exports = router; 