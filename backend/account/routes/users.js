const bcrypt = require("bcrypt");
const responseFormatter = require("../common/http/format");
const validateWithZod = require("../middleware/zod-middleware");
const userCreateSchema = require("../common/validation/create-user-validation");
const userUpdateSchema = require("../common/validation/update-user-validation");
const userRepository = require("../repository/users");

var express = require("express");
var router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const users = await userRepository.findAll();
    return res
      .status(200)
      .json(responseFormatter("success", users, "Users fetched successfully"));
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json(responseFormatter("error", null, "Error fetching users"));
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userRepository.findById(id);
    if (!user) {
      return res
        .status(404)
        .json(responseFormatter("error", null, "User not found"));
    }
    return res
      .status(200)
      .json(responseFormatter("success", user, "User fetched successfully"));
  } catch (error) {
    console.error("Error fetching user:", error);
    return res
      .status(500)
      .json(responseFormatter("error", null, "Error fetching user"));
  }
});

router.post("/", validateWithZod(userCreateSchema), async (req, res) => {
  const userData = req.body;
  try {
    const user = await userRepository.findByEmail(userData.email);
    if (user) {
      return res
        .status(400)
        .json(responseFormatter("error", null, "Email already exist"));
    }
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const newUser = await userRepository.create({
      ...userData,
      password: hashedPassword,
    });
    return res
      .status(201)
      .json(responseFormatter("success", newUser, "User created successfully"));
  } catch (error) {
    console.error("Error creating user:", error);
    return res
      .status(500)
      .json(responseFormatter("error", null, "Error creating user"));
  }
});

router.put("/:id", validateWithZod(userUpdateSchema), async (req, res) => {
  const { id } = req.params;
  const userData = req.body;
  try {
    console.log("=>", id);
    const user = await userRepository.findById(id);
    if (!user) {
      return res
        .status(404)
        .json(responseFormatter("error", null, "User not found"));
    }

    if (userData.password) {
      userData.password = await bcrypt.hash(userData.password, 10);
    }

    const updatedUser = await userRepository.update(id, userData);

    return res
      .status(200)
      .json(
        responseFormatter("success", updatedUser, "User updated successfully")
      );
  } catch (error) {
    console.error("Error updating user:", error);
    return res
      .status(500)
      .json(responseFormatter("error", null, "Error updating user"));
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userRepository.findById(id);
    if (!user) {
      return res
        .status(404)
        .json(responseFormatter("error", null, "User not found"));
    }

    await userRepository.destroy(id);

    return res
      .status(200)
      .json(responseFormatter("success", null, "User deleted successfully"));
  } catch (error) {
    console.error("Error deleting user:", error);
    return res
      .status(500)
      .json(responseFormatter("error", null, "Error deleting user"));
  }
});

module.exports = router;
