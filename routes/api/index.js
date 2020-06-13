const router = require('express').Router();
const productRoutes = require('./products');
const messageRoute = require('./message');
const userRoute = require('./users');
const postRoute = require('./posts');

// Book routes
router.use('/items', productRoutes);
router.use('/', messageRoute);
router.use('/users', userRoute);
router.use('/posts', postRoute);

module.exports = router;
