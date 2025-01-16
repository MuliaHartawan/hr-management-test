var express = require("express");
var router = express.Router();

const employeesHandlers = require("./handler/employees");
const verifyToken = require("../middleware/auth-middleware");

router.get("/", verifyToken, employeesHandlers.findAll);
router.get("/:id", verifyToken, employeesHandlers.findOne);
router.post("/", verifyToken, employeesHandlers.create);
router.put("/:id", verifyToken, employeesHandlers.update);
router.delete("/:id", verifyToken, employeesHandlers.destroy);

module.exports = router;
