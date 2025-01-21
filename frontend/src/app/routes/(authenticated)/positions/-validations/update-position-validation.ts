import { z } from "zod";

export const updatePositionValidation = z.object({
  name: z.string().min(1).max(255).nonempty("Name is required").optional(),
  department_id: z.number().positive().optional(),
});

export type TUpdatePositionValidation = z.infer<
  typeof updatePositionValidation
>;
