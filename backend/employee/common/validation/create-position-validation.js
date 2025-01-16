const { z } = require("zod");

const departmentCreateSchema = z.object({
  name: z.string(),
  department_id: z.number().min(1),
});

module.exports = departmentCreateSchema;
