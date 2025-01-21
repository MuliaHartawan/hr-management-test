import { z } from "zod";

export const createPositionValidation = z.object({
  name: z.string().min(1).max(255).nonempty("Name is required"),
  department_id: z.number().positive(),
});

export type TCreatePositionValidation = z.infer<
  typeof createPositionValidation
>;
