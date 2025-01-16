const { z } = require("zod");

const departmentUpdateSchema = z.object({
  name: z.string().optional(),
  department_id: z.number().min(1).optional(),
});

module.exports = departmentUpdateSchema;
