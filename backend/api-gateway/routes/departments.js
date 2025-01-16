var express = require("express");
var router = express.Router();

const departmentsHandlers = require("./handler/departments");
const verifyToken = require("../middleware/auth-middleware");

router.get("/", verifyToken, departmentsHandlers.findAll);
router.get("/:id", verifyToken, departmentsHandlers.findOne);
router.post("/", verifyToken, departmentsHandlers.create);
router.put("/:id", verifyToken, departmentsHandlers.update);
router.delete("/:id", verifyToken, departmentsHandlers.destroy);

module.exports = router;
