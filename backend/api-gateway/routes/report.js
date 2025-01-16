var express = require("express");
var router = express.Router();

const reportsHandlers = require("./handler/report");
const verifyToken = require("../middleware/auth-middleware");

router.get("/", verifyToken, reportsHandlers.report);

module.exports = router;
