const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Email = require('../../models/Email');

router.post('/', (req, res) => {
  const email = {};
  if (req.body.email) postFields.email = req.body.email;
  new Email(email).save().then((email) => res.json(email));
});

module.exports = router;
