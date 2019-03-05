const db = require("../models");


// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Product
      .find(req.query)
      .sort({ _id: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Product
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
      
  },
  addToCart: function(req, res, next) {
    var productId = req.params.query;
    console.log(req.params.query)
}
}


