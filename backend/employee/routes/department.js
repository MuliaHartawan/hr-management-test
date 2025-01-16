const responseFormatter = require("../common/http/format");
const validateWithZod = require("../middleware/zod-middleware");
const departmentCreateSchema = require("../common/validation/create-department-validation");
const departmentUpdateSchema = require("../common/validation/update-department-validation");
const departmentRepository = require("../repository/department");

var express = require("express");
var router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const departments = await departmentRepository.findAll();
    return res
      .status(200)
      .json(
        responseFormatter(
          "success",
          departments,
          "Departments fetched successfully"
        )
      );
  } catch (error) {
    return res
      .status(500)
      .json(responseFormatter("error", null, "Error fetching departments"));
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const department = await departmentRepository.findById(id);
    if (!department) {
      return res
        .status(404)
        .json(responseFormatter("error", null, "Department not found"));
    }
    return res
      .status(200)
      .json(
        responseFormatter(
          "success",
          department,
          "Department fetched successfully"
        )
      );
  } catch (error) {
    console.error("Error fetching department:", error);
    res
      .status(500)
      .json(responseFormatter("error", null, "Error fetching department"));
  }
});

router.post("/", validateWithZod(departmentCreateSchema), async (req, res) => {
  const departmentData = req.body;
  try {
    const department = await departmentRepository.findByName(
      departmentData.name
    );
    if (department) {
      return res
        .status(400)
        .json(responseFormatter("error", null, "Department already exist"));
    }
    const newDepartment = await departmentRepository.create(departmentData);
    return res
      .status(201)
      .json(
        responseFormatter(
          "success",
          newDepartment,
          "Department created successfully"
        )
      );
  } catch (error) {
    return res
      .status(500)
      .json(responseFormatter("error", null, "Error creating department"));
  }
});

router.put(
  "/:id",
  validateWithZod(departmentUpdateSchema),
  async (req, res) => {
    const { id } = req.params;
    const departmentData = req.body;
    try {
      const department = await departmentRepository.findById(id);
      if (!department) {
        return res
          .status(404)
          .json(responseFormatter("error", null, "Department not found"));
      }

      const updatedDepartment = await departmentRepository.update(
        id,
        departmentData
      );

      return res
        .status(200)
        .json(
          responseFormatter(
            "success",
            updatedDepartment,
            "Department updated successfully"
          )
        );
    } catch (error) {
      console.error("Error updating department:", error);
      return res
        .status(500)
        .json(responseFormatter("error", null, "Error updating department"));
    }
  }
);

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const department = await departmentRepository.findById(id);
    if (!department) {
      return res
        .status(404)
        .json(responseFormatter("error", null, "Department not found"));
    }

    await departmentRepository.destroy(id);

    return res
      .status(200)
      .json(
        responseFormatter("success", null, "Department deleted successfully")
      );
  } catch (error) {
    console.error("Error deleting department:", error);
    return res
      .status(500)
      .json(responseFormatter("error", null, "Error deleting department"));
  }
});

module.exports = router;
