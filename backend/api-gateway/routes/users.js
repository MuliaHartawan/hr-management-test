var express = require("express");
var router = express.Router();

const usersHandlers = require("./handler/users");
const verifyToken = require("../middleware/auth-middleware");

router.get("/", verifyToken, usersHandlers.findAll);
router.get("/:id", verifyToken, usersHandlers.findOne);
router.get("/me", verifyToken, usersHandlers.findMe);
router.post("/", verifyToken, usersHandlers.create);
router.put("/:id", verifyToken, usersHandlers.update);
router.delete("/:id", verifyToken, usersHandlers.destroy);

module.exports = router;
