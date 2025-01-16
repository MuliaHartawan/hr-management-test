var express = require("express");
var router = express.Router();

const shiftsHandlers = require("./handler/shifts");
const verifyToken = require("../middleware/auth-middleware");

router.get("/", verifyToken, shiftsHandlers.findAll);
router.get("/:id", verifyToken, shiftsHandlers.findOne);
router.post("/", verifyToken, shiftsHandlers.create);
router.put("/:id", verifyToken, shiftsHandlers.update);
router.delete("/:id", verifyToken, shiftsHandlers.destroy);

module.exports = router;
