import { z } from "zod";

export const createDepartmentValidation = z.object({
  name: z.string().min(1).max(100).nonempty("Name is required"),
  description: z.string().optional(),
});

export type TCreateDepartmentValidation = z.infer<
  typeof createDepartmentValidation
>;
