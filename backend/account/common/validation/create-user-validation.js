const { z } = require("zod");

const userCreateSchema = z.object({
  email: z.string().email({ message: "Invalid email format" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
  role_id: z.number(),
  is_active: z.boolean().optional(),
});

module.exports = userCreateSchema;
