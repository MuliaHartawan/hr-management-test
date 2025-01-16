const responseFormatter = require("../common/http/format");
const validateWithZod = require("../middleware/zod-middleware");
const shiftCreateSchema = require("../common/validation/create-shift-validation");
const shiftUpdateSchema = require("../common/validation/update-shift-validation");
const shiftRepository = require("../repository/shift");

var express = require("express");
var router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const shifts = await shiftRepository.findAll();
    return res
      .status(200)
      .json(
        responseFormatter("success", shifts, "Shifts fetched successfully")
      );
  } catch (error) {
    return res
      .status(500)
      .json(responseFormatter("error", null, "Error fetching shifts"));
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const shift = await shiftRepository.findById(id);
    if (!shift) {
      return res
        .status(404)
        .json(responseFormatter("error", null, "Shift not found"));
    }
    return res
      .status(200)
      .json(responseFormatter("success", shift, "Shift fetched successfully"));
  } catch (error) {
    console.error("Error fetching shift:", error);
    res
      .status(500)
      .json(responseFormatter("error", null, "Error fetching shift"));
  }
});

router.post("/", validateWithZod(shiftCreateSchema), async (req, res) => {
  const shiftData = req.body;
  try {
    const newShift = await shiftRepository.create(shiftData);
    return res
      .status(201)
      .json(
        responseFormatter("success", newShift, "Shift created successfully")
      );
  } catch (error) {
    return res
      .status(500)
      .json(responseFormatter("error", null, "Error creating shift"));
  }
});

router.put("/:id", validateWithZod(shiftUpdateSchema), async (req, res) => {
  const { id } = req.params;
  const shiftData = req.body;
  try {
    const shift = await shiftRepository.findById(id);
    if (!shift) {
      return res
        .status(404)
        .json(responseFormatter("error", null, "Shift not found"));
    }

    const updatedShift = await shiftRepository.update(id, shiftData);

    return res
      .status(200)
      .json(
        responseFormatter("success", updatedShift, "Shift updated successfully")
      );
  } catch (error) {
    console.error("Error updating shift:", error);
    return res
      .status(500)
      .json(responseFormatter("error", null, "Error updating shift"));
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const shift = await shiftRepository.findById(id);
    if (!shift) {
      return res
        .status(404)
        .json(responseFormatter("error", null, "Shift not found"));
    }

    await shiftRepository.destroy(id);

    return res
      .status(200)
      .json(responseFormatter("success", null, "Shift deleted successfully"));
  } catch (error) {
    console.error("Error deleting shift:", error);
    return res
      .status(500)
      .json(responseFormatter("error", null, "Error deleting shift"));
  }
});

module.exports = router;
