import { z } from "zod";

export const updateDepartmentValidation = z.object({
  name: z.string().min(1).max(100).optional(),
  description: z.string().optional(),
});

export type TUpdateDepartmentValidation = z.infer<
  typeof updateDepartmentValidation
>;
