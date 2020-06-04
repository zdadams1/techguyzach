const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateItemInput(data) {
  let errors = {};
  //name image desc price
  data.name = !isEmpty(data.name) ? data.name : '';
  data.image = !isEmpty(data.image) ? data.image : '';
  data.description = !isEmpty(data.description) ? data.description : '';
  data.price = !isEmpty(data.price) ? data.price : '';

  if (!Validator.isLength(data.name, { min: 2, max: 25 })) {
    errors.name = 'Name needs to between 2 and 25 characters';
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name is required';
  }

  if (Validator.isEmpty(data.image)) {
    errors.image = 'Image is required';
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = 'Description is required';
  }

  if (Validator.isEmpty(data.Price)) {
    errors.Price = 'Price is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
