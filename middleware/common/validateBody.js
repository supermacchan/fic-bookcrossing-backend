const { ValidationError } = require("../../helpers/errors");

const validateBody = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      next(new ValidationError(error.message));
    }
    next();
  };

  return func;
};

module.exports = validateBody;