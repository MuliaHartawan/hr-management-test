const responseFormatter = require("../common/http/format");
const validateWithZod = require("../middleware/zod-middleware");
const positionCreateSchema = require("../common/validation/create-position-validation");
const positionUpdateSchema = require("../common/validation/update-position-validation");
const positionRepository = require("../repository/position");

var express = require("express");
var router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const positions = await positionRepository.findAll();
    return res
      .status(200)
      .json(
        responseFormatter(
          "success",
          positions,
          "Positions fetched successfully"
        )
      );
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json(responseFormatter("error", null, "Error fetching positions"));
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const position = await positionRepository.findById(id);
    if (!position) {
      return res
        .status(404)
        .json(responseFormatter("error", null, "Position not found"));
    }
    return res
      .status(200)
      .json(
        responseFormatter("success", position, "Position fetched successfully")
      );
  } catch (error) {
    console.error("Error fetching position:", error);
    res
      .status(500)
      .json(responseFormatter("error", null, "Error fetching position"));
  }
});

router.post("/", validateWithZod(positionCreateSchema), async (req, res) => {
  const positionData = req.body;
  try {
    const newPosition = await positionRepository.create(positionData);
    return res
      .status(201)
      .json(
        responseFormatter(
          "success",
          newPosition,
          "Position created successfully"
        )
      );
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json(responseFormatter("error", null, "Error creating position"));
  }
});

router.put("/:id", validateWithZod(positionUpdateSchema), async (req, res) => {
  const { id } = req.params;
  const positionData = req.body;
  try {
    const position = await positionRepository.findById(id);
    if (!position) {
      return res
        .status(404)
        .json(responseFormatter("error", null, "Position not found"));
    }

    const updatedPosition = await positionRepository.update(id, positionData);

    return res
      .status(200)
      .json(
        responseFormatter(
          "success",
          updatedPosition,
          "Position updated successfully"
        )
      );
  } catch (error) {
    console.error("Error updating position:", error);
    return res
      .status(500)
      .json(responseFormatter("error", null, "Error updating position"));
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const position = await positionRepository.findById(id);
    if (!position) {
      return res
        .status(404)
        .json(responseFormatter("error", null, "Position not found"));
    }

    await positionRepository.destroy(id);

    return res
      .status(200)
      .json(
        responseFormatter("success", null, "Position deleted successfully")
      );
  } catch (error) {
    console.error("Error deleting position:", error);
    return res
      .status(500)
      .json(responseFormatter("error", null, "Error deleting position"));
  }
});

module.exports = router;
