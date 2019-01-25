const Validator = require('validator');
const isEmpty = require('./is-Empty');

module.exports = function validatePostInput(data) {
    let errors = {};
    data.text = !isEmpty(data.text) ? data.text : '';


      if (Validator.isEmpty(data.text)) {
        errors.text = 'Text field is required';
      }
    
      if (!Validator.isLength(data.text, { min: 10, max: 300 })) {
        errors.text = 'Minumum of 10 characters, max 300 characterse';
      }
    
    return {
        errors, 
        isValid: isEmpty(errors)
      }

}