const { z } = require("zod");

const departmentUpdateSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
});

module.exports = departmentUpdateSchema;
