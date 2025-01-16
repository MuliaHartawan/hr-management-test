const responseFormatter = require("../common/http/format");
const validateWithZod = require("../middleware/zod-middleware");
const employeeCreateSchema = require("../common/validation/create-employee-validation");
const employeeUpdateSchema = require("../common/validation/update-employee-validation");
const employeeRepository = require("../repository/employee");

var express = require("express");
var router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const employees = await employeeRepository.findAll();
    return res
      .status(200)
      .json(
        responseFormatter(
          "success",
          employees,
          "Employees fetched successfully"
        )
      );
  } catch (error) {
    return res
      .status(500)
      .json(responseFormatter("error", null, "Error fetching employees"));
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const employee = await employeeRepository.findById(id);
    if (!employee) {
      return res
        .status(404)
        .json(responseFormatter("error", null, "Employee not found"));
    }
    return res
      .status(200)
      .json(
        responseFormatter("success", employee, "Employee fetched successfully")
      );
  } catch (error) {
    console.error("Error fetching employee:", error);
    res
      .status(500)
      .json(responseFormatter("error", null, "Error fetching employee"));
  }
});

router.post("/", validateWithZod(employeeCreateSchema), async (req, res) => {
  const employeeData = req.body;
  try {
    const newEmployee = await employeeRepository.create(employeeData);
    return res
      .status(201)
      .json(
        responseFormatter(
          "success",
          newEmployee,
          "Employee created successfully"
        )
      );
  } catch (error) {
    return res
      .status(500)
      .json(responseFormatter("error", null, "Error creating employee"));
  }
});

router.put("/:id", validateWithZod(employeeUpdateSchema), async (req, res) => {
  const { id } = req.params;
  const employeeData = req.body;
  try {
    const employee = await employeeRepository.findById(id);
    if (!employee) {
      return res
        .status(404)
        .json(responseFormatter("error", null, "Employee not found"));
    }

    const updatedEmployee = await employeeRepository.update(id, employeeData);

    return res
      .status(200)
      .json(
        responseFormatter(
          "success",
          updatedEmployee,
          "Employee updated successfully"
        )
      );
  } catch (error) {
    console.error("Error updating employee:", error);
    return res
      .status(500)
      .json(responseFormatter("error", null, "Error updating employee"));
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const employee = await employeeRepository.findById(id);
    if (!employee) {
      return res
        .status(404)
        .json(responseFormatter("error", null, "Employee not found"));
    }

    await employeeRepository.destroy(id);

    return res
      .status(200)
      .json(
        responseFormatter("success", null, "Employee deleted successfully")
      );
  } catch (error) {
    console.error("Error deleting employee:", error);
    return res
      .status(500)
      .json(responseFormatter("error", null, "Error deleting employee"));
  }
});

module.exports = router;
