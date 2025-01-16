const { z } = require("zod");

const departmentCreateSchema = z.object({
  name: z.string({ required_error: "name is required" }),
  description: z.string().optional(),
});

module.exports = departmentCreateSchema;
