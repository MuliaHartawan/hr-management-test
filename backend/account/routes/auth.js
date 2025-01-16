const responseFormatter = require("../common/http/format");
const loginSchema = require("../common/validation/login-validation");
const validateWithZod = require("../middleware/zod-middleware");
const userRepository = require("../repository/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

var express = require("express");
var router = express.Router();

router.post("/login", validateWithZod(loginSchema), async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userRepository.findByEmail(email);

    if (!user) {
      return res
        .status(404)
        .json(responseFormatter("error", null, "User not found"));
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res
        .status(401)
        .json(responseFormatter("error", null, "Invalid password"));
    }

    delete user.dataValues.password;

    return res.status(200).json(user);
  } catch (error) {
    console.error("Error during login:", error);
    return res
      .status(500)
      .json(responseFormatter("error", null, "Internal server error"));
  }
});

module.exports = router;
