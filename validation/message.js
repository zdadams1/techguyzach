const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateMessageInput(data) {
  let errors = {};

  data.message = !isEmpty(data.message) ? data.message : '';

  if (!Validator.isLength(data.message, { min: 2, max: 40 })) {
    errors.message = 'Message needs to between 2 and 40 characters';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
