import { z } from "zod";

export const updateUserValidation = z.object({
  is_active: z.boolean(),
  role_id: z.number().positive(),
});

export type TUpdateUserValidation = z.infer<typeof updateUserValidation>;
