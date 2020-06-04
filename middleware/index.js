const mongoose = require("mongoose");
const Post = mongoose.model("posts");

// all the middleare goes here
const middlewareObj = {};

middlewareObj.checkUserAdmin = (req, res, next) => {
  if (
    (req.isAuthenticated() && req.user.email === "zdadams1@gmail.com") ||
    req.user.email === "Zdadams1@gmail.com"
  ) {
  }
};

module.exports = middlewareObj;
