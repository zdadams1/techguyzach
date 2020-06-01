const router = require('express').Router();
const productRoutes = require('./products');
const messageRoute = require('./message');

// Book routes
router.use('/items', productRoutes);
router.use('/', messageRoute);

module.exports = router;
