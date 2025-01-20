const responseFormatter = require("../common/http/format");
const validateWithZod = require("../middleware/zod-middleware");
const roleCreateSchema = require("../common/validation/create-role-validation");
const roleUpdateSchema = require("../common/validation/update-role-validation");
const roleRepository = require("../repository/roles");

var express = require("express");
var router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const roles = await roleRepository.findAll();
    return res
      .status(200)
      .json(responseFormatter("success", roles, "Roles fetched successfully"));
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json(responseFormatter("error", null, "Error fetching roles"));
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const role = await roleRepository.findById(id);
    if (!role) {
      return res
        .status(404)
        .json(responseFormatter("error", null, "Role not found"));
    }
    return res
      .status(200)
      .json(responseFormatter("success", role, "Role fetched successfully"));
  } catch (error) {
    console.error("Error fetching role:", error);
    return res
      .status(500)
      .json(responseFormatter("error", null, "Error fetching role"));
  }
});

router.post("/", validateWithZod(roleCreateSchema), async (req, res) => {
  const roleData = req.body;
  try {
    const newRole = await roleRepository.create({
      ...roleData,
    });
    return res
      .status(201)
      .json(responseFormatter("success", newRole, "Role created successfully"));
  } catch (error) {
    console.error("Error creating role:", error);
    return res
      .status(500)
      .json(responseFormatter("error", null, "Error creating role"));
  }
});

router.put("/:id", validateWithZod(roleUpdateSchema), async (req, res) => {
  const { id } = req.params;
  const roleData = req.body;
  try {
    const role = await roleRepository.findById(id);
    if (!role) {
      return res
        .status(404)
        .json(responseFormatter("error", null, "Role not found"));
    }

    if (roleData.password) {
      roleData.password = await bcrypt.hash(roleData.password, 10);
    }

    const updatedRole = await roleRepository.update(id, roleData);

    return res
      .status(200)
      .json(
        responseFormatter("success", updatedRole, "Role updated successfully")
      );
  } catch (error) {
    console.error("Error updating role:", error);
    return res
      .status(500)
      .json(responseFormatter("error", null, "Error updating role"));
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const role = await roleRepository.findById(id);
    if (!role) {
      return res
        .status(404)
        .json(responseFormatter("error", null, "Role not found"));
    }

    await roleRepository.destroy(id);

    return res
      .status(200)
      .json(responseFormatter("success", null, "Role deleted successfully"));
  } catch (error) {
    console.error("Error deleting role:", error);
    return res
      .status(500)
      .json(responseFormatter("error", null, "Error deleting role"));
  }
});

module.exports = router;
