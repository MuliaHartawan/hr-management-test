var express = require("express");
var router = express.Router();
const verifyToken = require("../middleware/auth-middleware");

const dashboardHandlers = require("./handler/dashboard");

router.get("/", verifyToken, dashboardHandlers.findDashboard);

module.exports = router;
