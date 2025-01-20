const { z } = require("zod");

const roleCreateSchema = z.object({
  name: z.string(),
});

module.exports = roleCreateSchema;
