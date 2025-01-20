var express = require("express");
var router = express.Router();
const getUploadMiddleware = require("../middleware/file-middleware");

const attendancesHandlers = require("./handler/attendances");
const verifyToken = require("../middleware/auth-middleware");
const upload = getUploadMiddleware();

router.get("/", verifyToken, attendancesHandlers.findAll);
router.post(
  "/",
  verifyToken,
  upload.single("clock_in_photo"),
  attendancesHandlers.checkin
);
router.put(
  "/",
  verifyToken,
  upload.single("clock_out_photo"),
  attendancesHandlers.checkout
);
router.put("/approval", verifyToken, attendancesHandlers.approval);
router.get("/detail/:id", verifyToken, attendancesHandlers.findOne);
router.get("/status", verifyToken, attendancesHandlers.findStatus);
router.get("/me", verifyToken, attendancesHandlers.findMe);

module.exports = router;
