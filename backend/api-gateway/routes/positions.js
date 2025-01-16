var express = require("express");
var router = express.Router();

const positionsHandlers = require("./handler/positions");
const verifyToken = require("../middleware/auth-middleware");

router.get("/", verifyToken, positionsHandlers.findAll);
router.get("/:id", verifyToken, positionsHandlers.findOne);
router.post("/", verifyToken, positionsHandlers.create);
router.put("/:id", verifyToken, positionsHandlers.update);
router.delete("/:id", verifyToken, positionsHandlers.destroy);

module.exports = router;
