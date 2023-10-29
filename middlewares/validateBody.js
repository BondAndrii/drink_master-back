const { HttpError } = require("../utils");

const validateBody = (schema) => {
  const func = (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
      next(HttpError(400, "Missing fields"));
    }

    const { error } = schema.validate(req.body);
    if (error) {
      next(HttpError(400, "Bad request"));
    }
    next();
  };

  return func;
};
module.exports = validateBody;
