var express = require("express");
var router = express.Router();

const authHandlers = require("./handler/authentication");

router.post("/login", authHandlers.login);

module.exports = router;
