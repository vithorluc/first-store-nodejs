const Product = require('../models/product');

    exports.getAddProduct = (req, res, next) => {
        res.render('admin/add-product', {
            pageTitle: 'Add Product', 
            path: '/admin/add-product',
        }); 
    };


    exports.postAddProduct = (req, res, next) => {
        const {title, price, description, imageUrl} = req.body; 
        const product = new Product(title, price, description, imageUrl);
        product.save();
        res.redirect('/');
    };


    exports.getProducts = (req, res, next) => {
        console.log('objects here', );
        Product.fetchAll(products => {
            res.render('admin/products', {
                prods: products, 
                pageTitle: 'Admin Products',
                path: '/admin/products', 
        }); 
    });     
}