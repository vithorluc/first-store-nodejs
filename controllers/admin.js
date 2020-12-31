const Product = require('../models/product');

    exports.getAddProduct = (req, res, next) => {
        res.render('admin/edit-product', {
            pageTitle: 'add Product', 
            path: '/admin/add-product',
            editing: false, 
        }); 
    };


    exports.postAddProduct = (req, res, next) => {
        const {title, price, description, imageUrl} = req.body; 
        console.log(title, price, description, imageUrl);
        const product = new Product(null, title, imageUrl, description, price);
        product
        .save()
        .then(() => {})
        .catch(err => {console.log(err)});
        res.redirect('/');
    };

    exports.getEditProduct = (req, res, next) => {
        const editMode = req.query.edit; 
        if (!editMode){
            return res.redirect('/');
        }
        const prodId = req.params.productId; 
        Product.findById(prodId, product => {
            if (!product){
                res.redirect('/');
            }
            res.render('admin/edit-product', {
                pageTitle: 'Edit Product', 
                path: '/admin/edit-product',
                editing: editMode, 
                product: product
            }); 
        }); 
    };

    exports.postEditProduct = (req, res, next) => {
        const {title, price, description, imageUrl} = req.body; 
        const prodId = req.body.productId; 
        const updatedProduct = new Product(prodId, title, imageUrl,description, price); 
        updatedProduct.save(); 
        res.redirect('/admin/products');
    };



    exports.getProducts = (req, res, next) => {
        Product.fetchAll(products => {
            res.render('admin/products', {
                prods: products, 
                pageTitle: 'Admin Products',
                path: '/admin/products', 
        }); 
    });     
};

exports.postDeleteProduct = (req, res, next) => {
    const { productId } = req.body;
    Product.deleteById(productId); 
    res.redirect('/admin/products');

}; 