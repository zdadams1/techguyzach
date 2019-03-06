var express = require('express');
const router = require("express").Router();
const csrf = require('csurf');
const csrfProtection = csrf();
const productsController = require("../../controllers/productsController");
const db = require("../../models");
const Cart = require("../../models/cart");

// Matches with "/api/books"
// router.get("/", function(req, res) {
//   db.Product
//     .find(req.query)
//     .sort({ _id: -1 })
//     .then(dbModel => res.json(dbModel))
//     .catch(err => res.status(422).json(err));
// });

router.get("/", function(req, res) {
  console.log(req.session.id)
  
  db.Product.find(function (err, docs) {
    
  }).then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

router.get("/cart", function(req, res) {
  console.log(req.session.id)

  if (!req.session.cart) {
    return res.json({products: null});
} 

    var cart = new Cart(req.session.cart);
    res.json(cart);
});

router.get("/lessThan", function(req, res) {
  console.log(req.session.id)
  
  db.Product.find({ price: {$lt: 100.00} },function (err, docs) {
    
  }).then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

router.get("/greatThan", function(req, res) {
  console.log(req.session.id)
  
  db.Product.find({ price: {$gte: 100.00} },function (err, docs) {
    
  }).then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});
 

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(productsController.findById)

//Individual Item view
router.get('/item/:id', function(req, res) {
  console.log(req.session.id)
  db.Product
    .findById(req.params.id)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
    
});



//Adding to cart based on session
router.get('/:id', function(req, res, next) {
  console.log(req.session.id);
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  db.Product.findById(productId, function(err, product) {
   
      cart.add(product, product.id);
      req.session.cart = cart;
      req.session.save()
      
  });
});
 

router.get('/sess', function(req, res){
  console.log(req.session.id);
  console.log('Okayyyyyyy');
});


// router.('/cart', function(req, res, next) {
//   // console.log(req.session.id)
//   console.log('req.session.cart')

//   // !req.session.cart : res.json(null) ? 

//   // if (!req.session.cart) {
//   //     return res.render('shop/shopping-cart', {products: null});
//   // } 
//   //  var cart = new Cart(req.session.cart);
//   //  res.render('shop/shopping-cart', {products: cart.generateArray(), totalPrice: cart.totalPrice});
//   //  sessions.findById(req.session.id).then(product => res.json(product))
// });

module.exports = router;
