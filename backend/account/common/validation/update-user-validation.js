const { z } = require("zod");

const userUpdateSchema = z.object({
  email: z.string().email({ message: "Invalid email format" }).optional(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .optional(),
  role_id: z.number(),
  is_active: z.boolean().optional(),
});

module.exports = userUpdateSchema;
