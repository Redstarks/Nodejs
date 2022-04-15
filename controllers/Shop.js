const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products)=>{
        res.render('shop/product-list', {
            prods: products, 
            docTitle: 'All products', 
            path: '/'
        
        });
    });
}
exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    console.log(prodId);
    res.redirect('/');
}
exports.getIndex = (req,res,next) => {
    Product.fetchAll((products)=>{
        res.render('shop/index', {
            prods: products, 
            docTitle: 'Home', 
            path: '/'
        
        });
    });
}
exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        docTitle : 'Cart',
        path : '/cart'
    });
}
exports.getCheckout = (req,res,next) => {
    res.render('shop/checkout', {
        docTitle : 'Checkout'
    })
}
exports.getOrders = (req,res,next) => {
    res.render('shop/orders', {
        docTitle : 'orders',
        path : '/orders'
    })
}
