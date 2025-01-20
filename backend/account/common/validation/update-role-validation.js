const { z } = require("zod");

const userUpdateSchema = z.object({
  name: z.string(),
});

module.exports = userUpdateSchema;
