import { z } from "zod";

export const createEmployeeValidation = z.object({
  user_id: z.number().int().min(1, "User ID is required"),
  first_name: z.string().min(1, "First name is required").max(100),
  last_name: z.string().max(100).optional(),
  department_id: z.number().min(1),
  position_id: z.number().min(1),
  shift_id: z.number().int(),
  phone: z.string().max(13).optional(),
  address: z.string().optional(),
  nip: z.number(),
  join_date: z.string().date(),
});

export type TCreateEmployeeValidation = z.infer<
  typeof createEmployeeValidation
>;
