const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const EmailSchema = new Schema({
  emails: [
    {
      email: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = Email = mongoose.model('emails', EmailSchema);
