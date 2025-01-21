import { z } from "zod";

export const createUserValidation = z.object({
  email: z.string().email().min(1).max(255).nonempty("Email is required"),
  password: z.string().min(1).max(255).nonempty("Password is required"),
  is_active: z.boolean(),
  role_id: z.number().positive(),
});

export type TCreateUserValidation = z.infer<typeof createUserValidation>;
