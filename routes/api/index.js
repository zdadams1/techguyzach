const router = require('express').Router();
const productRoutes = require('./products');
const messageRoute = require('./message');
const userRoute = require('./users');
const postRoute = require('./posts');
const email = require('./email');

// Book routes
router.use('/items', productRoutes);
router.use('/', messageRoute);
router.use('/users', userRoute);
router.use('/posts', postRoute);
router.use('/emaillist', email);

module.exports = router;
