const responseFormatter = require("../common/http/format");

const validateWithZod = (schema) => {
  return (req, res, next) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      return res
        .status(400)
        .json(responseFormatter("error", null, error.errors[0].message));
    }
  };
};

module.exports = validateWithZod;
