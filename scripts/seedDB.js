const mongoose = require('mongoose');
const db = require('../models');

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGO_URI ||
    'mongodb://zdadams1:Za2011!!@ds113795.mlab.com:13795/zach-adams'
);

const productSeed = [
  {
    name: 'Tutoring',
    price: 30.0,
    description:
      '$30 for 30 minutes of tutoring in Chemistry, Physics, Math, or Software Engineering',
    type: 'new'
  },
  {
    name: 'Base Power PC',
    price: 1050.0,
    description:
      'GeForce GTX 1660 6GB, 16GB DDR4 3200, Intel i5-9400F, 500GB SSD.',

    type: 'new'
  },
  {
    name: 'Ultimate Power PC',
    price: 1600.0,
    description:
      'GeForce RTX 2060 6GB, 32GB DDR4 3200, Intel i7-9700K, 500GB SSD.',

    type: 'new'
  },
  {
    name: 'Intermediate Power PC',
    price: 1300.0,
    description:
      'GeForce GTX 1660 6GB, 32GB DDR4 3200, Intel i5-9600K, 500GB SSD.',

    type: 'new'
  },
  {
    name: 'Advertising',
    price: 500.0,
    description: 'Promote your business for $500/month.'
  },
  {
    name: 'Website',
    price: 800.0,
    description: 'Full working website for your business.'
  },
  {
    name: 'Landing Page',
    price: 400.0,
    description: 'Attract more customers with a stylish and efficient page.'
  },
  {
    name: 'Mobile App',
    price: 1000.0,
    description: 'Custom mobile app for your business.'
  }
];

db.Product.remove({})
  .then(() => db.Product.collection.insertMany(productSeed))
  .then(data => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
