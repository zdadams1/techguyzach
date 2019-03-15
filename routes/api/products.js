var express = require('express');
const router = require("express").Router();
const csrf = require('csurf');
const csrfProtection = csrf();
const productsController = require("../../controllers/productsController");
const db = require("../../models");
const Cart = require("../../models/cart");
const mongoose = require("mongoose");
const keySecret = require('../../config/key');
const stripe = require("stripe")(keySecret.stripe.keySecret);



router.get("/", function(req, res) {
  console.log(req.session.id)
  
  db.Product.aggregate([{$sample: {size: 12}}], function (err, docs) {
    
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

//deletes from cart
router.get('/remove/:id', function(req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  console.log(productId)
  cart.removeItem(productId);
  req.session.cart = cart;
  res.json(cart)
});


router.post("/charge",  (req, res, next) => {
  console.log('cart id')
   console.log(req.session.id)
   var cart = new Cart(req.session.cart ? req.session.cart : {});
  let amount = req.session.cart.totalPrice * 100;


  

  // var datas = req.session.cart;
//   var final =  [];
// for(var key in datas) {
//   for(var ney in datas[key]) {
//     final.push(datas[key][ney])
//   }
// }

//  console.log(final)
   stripe.customers.create({
      email: req.body.email,
     source: req.body.id
   })
   .then(customer =>
     stripe.charges.create({
       amount,
       description: "Sample Charge",
          currency: "usd",
          customer: customer.id
     }))
     req.session.destroy()
     req.session.cart = null

 });


//Products Page Filter - Not used currently

// router.get("/lessThan", function(req, res) {
//   console.log(req.session.id)
  
//   db.Product.find({ price: {$lt: 100.00} },function (err, docs) {
    
//   }).then(dbModel => res.json(dbModel))
//     .catch(err => res.status(422).json(err));
// });

// router.get("/greatThan", function(req, res) {
//   console.log(req.session.id)
  
//   db.Product.find({ price: {$gte: 100.00} },function (err, docs) {
    
//   }).then(dbModel => res.json(dbModel))
//     .catch(err => res.status(422).json(err));
// });


//Filter by Category

router.get("/category/:id", function(req, res) {
  console.log(req.params.id)
  var requestedCategory = req.params.id;

  db.Product.find({ type: requestedCategory },function (err, docs) {
    
  }).then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));

});
 


//Individual Item view
router.get('/item/:id', function(req, res) {

  db.Product
    .findById(req.params.id)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
    
});



//Adding to cart based on session
router.post('/:id', function(req, res, next) {
  console.log(req.session.id);
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  db.Product.findById(productId, function(err, product) {
   
      cart.add(product, product.id);
      req.session.cart = cart;
      req.session.save()
      
  });
});

router.put('/reduce/:id', function(req, res, next) {
  // console.log(req.session.id);
  console.log('fired')
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});
      cart.reduceByOne(productId);
       req.session.cart = cart;
       req.session.save()


});

 


module.exports = router;
