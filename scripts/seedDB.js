const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const productSeed = [
  {
    name: 'Old TV',
    price: 120.99,
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    imageMain: 'oldTv1.jpg',
    imageSecond: 'oldTv2.jpg',
    imageThird: 'oldTv3.jpg',
    imageFourth: 'oldTv4.jpg',
    quantity: 20,
    category: 'electronics'
  },
  {
    name: 'TV',
    price: 10.99,
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    imageMain: 'oldTv2.jpg',
    imageSecond: 'oldTv1.jpg',
    imageThird: 'oldTv4.jpg',
    imageFourth: 'oldTv3.jpg',
    quantity: 20,
    category: 'electronics'
  },
  {
    name: 'Spoon',
    price: 90.97,
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    imageMain: 'oldTv3.jpg',
    imageSecond: 'oldTv4.jpg',
    imageThird: 'oldTv1.jpg',
    imageFourth: 'oldTv2.jpg',
    quantity: 20,
    category: 'electronics'
  },
  {
    name: 'Headphones',
    price: 10.12,
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    imageMain: 'oldTv4.jpg',
    imageSecond: 'oldTv3.jpg',
    imageThird: 'oldTv2.jpg',
    imageFourth: 'oldTv1.jpg',
    quantity: 20,
    category: 'electronics'
  },
  {
    name: 'Newish TV',
    price: 130.99,
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    imageMain: 'oldTv1.jpg',
    imageSecond: 'oldTv3.jpg',
    imageThird: 'oldTv1.jpg',
    imageFourth: 'oldTv2.jpg',
    quantity: 20,
    category: 'electronics'
  },
  {
    name: 'Cup',
    price: 100.99,
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    imageMain: 'oldTv1.jpg',
    imageSecond: 'oldTv2.jpg',
    imageThird: 'oldTv3.jpg',
    imageFourth: 'oldTv4.jpg',
    quantity: 20,
    category: 'electronics'
  },
  {
    name: 'Rake',
    price: 78.29,
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    imageMain: 'oldTv2.jpg',
    imageSecond: 'oldTv1.jpg',
    imageThird: 'oldTv4.jpg',
    imageFourth: 'oldTv3.jpg',
    quantity: 20,
    category: 'electronics'
  },
  {
    name: 'Spoon',
    price: 920.99,
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    imageMain: 'oldTv3.jpg',
    imageSecond: 'oldTv4.jpg',
    imageThird: 'oldTv1.jpg',
    imageFourth: 'oldTv2.jpg',
    quantity: 20,
    category: 'electronics'
  },
];

db.Product
  .remove({})
  .then(() => db.Product.collection.insertMany(productSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
