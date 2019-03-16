const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const csrf = require('csurf');
const csrfProtection = csrf();

router.use('/signin', csrfProtection)

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use('*', function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});





module.exports = router;
