var express = require('express');
const router = require('express').Router();
const csrf = require('csurf');
const csrfProtection = csrf();
const productsController = require('../../controllers/productsController');
const db = require('../../models');
const Cart = require('../../models/cart');
const mongoose = require('mongoose');
const stripe = require('stripe')('pk_live_EaFIYb5kp0eSOnjAGwCL21PS');

router.get('/', function(req, res) {
  console.log(req.session.id);

  db.Product.aggregate([{ $sample: { size: 12 } }], function(err, docs) {})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

router.get('/cart', function(req, res) {
  console.log(req.session.id);

  if (!req.session.cart) {
    return res.json({ products: null });
  }

  var cart = new Cart(req.session.cart);
  res.json(cart);
});

//deletes from cart
router.get('/remove/:id', function(req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  console.log(productId);
  cart.removeItem(productId);
  req.session.cart = cart;
  res.json(cart);
});

router.post('/charge', (req, res, next) => {
  console.log('cart id');
  console.log(req.session.id);
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
  stripe.customers
    .create({
      email: req.body.email,
      source: req.body.id
    })
    .then(customer =>
      stripe.charges.create({
        amount,
        description: 'Sample Charge',
        currency: 'usd',
        customer: customer.id
      })
    );
  const output = `
    <p>Thank you. Your order is on its way.</p>
    <ul>  
   
      <li>Email: ${req.body.email}</li>
      <li>Order: ${cart}</li>
      <li>Email: ${amount}</li>

    </ul>
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'mail.privateemail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'zach@techguyzach.com', // generated ethereal user
      pass: 'Za2011!!' // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  let to = ['zach@techguyzach.com', req.body.email];

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Nodemailer Contact" zach@techguyzach.com', // sender address
    to: to, // list of receivers
    subject: 'Node Contact Request', // Subject line
    text: 'Hello world?', // plain text body
    html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    res.render('contact', { msg: 'Email has been sent' });
  });
  req.session.destroy();
  req.session.cart = null;
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

router.get('/category/:id', function(req, res) {
  console.log(req.params.id);
  var requestedCategory = req.params.id;

  db.Product.find({ type: requestedCategory }, function(err, docs) {})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

//Individual Item view
router.get('/item/:id', function(req, res) {
  db.Product.findById(req.params.id)
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
    req.session.save();
  });
});

router.put('/reduce/:id', function(req, res, next) {
  // console.log(req.session.id);
  console.log('fired');
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  cart.reduceByOne(productId);
  req.session.cart = cart;
  req.session.save();
});

module.exports = router;
