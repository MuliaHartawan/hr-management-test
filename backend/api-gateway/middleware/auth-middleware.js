const jwt = require("jsonwebtoken");

const { JWT_SECRET } = process.env;

module.exports = async (req, res, next) => {
  const bearerHeader = req.headers.authorization;
  if (!bearerHeader) {
    return res
      .status(401)
      .json({ status: "error", message: "Unauthorized, please login." });
  }
  const bearerToken = bearerHeader.split(" ");
  const token = bearerToken[1];

  jwt.verify(token, JWT_SECRET, function (err, decoded) {
    if (err) {
      return res.status(403).json({ status: "error", message: err });
    }

    req.user = decoded;
    return next();
  });
};
