const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateJournalInput(data) {
  let errors = {};
  // Convert empty fields to an empty string so we can use validator functions
  data.title = !isEmpty(data.title) ? data.title : "";
  if (Validator.isEmpty(data.title)) {
    errors.title = "Journal title is required";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
