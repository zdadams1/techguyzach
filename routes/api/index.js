const router = require("express").Router();
const productRoutes = require("./products");

// Book routes
router.use('/items', productRoutes);

module.exports = router;
