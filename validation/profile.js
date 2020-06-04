const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProfileInput(data) {
  let errors = {};
  //handle thing image trocoin
  data.handle = !isEmpty(data.handle) ? data.handle : '';
  data.thing = !isEmpty(data.thing) ? data.thing : '';
  data.image = !isEmpty(data.image) ? data.image : '';
  data.trocoin = !isEmpty(data.trocoin) ? data.trocoin : '';

  if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle = 'Handle needs to between 2 and 40 characters';
  }

  if (Validator.isEmpty(data.handle)) {
    errors.handle = 'Profile handle is required';
  }

  if (Validator.isEmpty(data.trocoin)) {
    errors.trocoin = 'You must enter an amount at least 10';
  }

  if (Validator.isEmpty(data.image)) {
    errors.image = 'You must have an image.';
  }

  if (Validator.isEmpty(data.thing)) {
    errors.thing = 'One cool thing about you please.';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
