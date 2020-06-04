const router = require('express').Router();
const productRoutes = require('./products');
const messageRoute = require('./message');
const userRoute = require('./users');

// Book routes
router.use('/items', productRoutes);
router.use('/', messageRoute);
router.use('/users', userRoute);

module.exports = router;
