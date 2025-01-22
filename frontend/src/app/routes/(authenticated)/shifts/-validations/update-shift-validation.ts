import { z } from "zod";

export const updateShiftValidation = z.object({
  name: z.string().min(1, "Name is required.").optional(),
  start_time: z
    .string()
    .regex(/^([01]?\d|2[0-3]):[0-5]\d$/, "Start time must be in HH:MM format.")
    .optional(),
  end_time: z
    .string()
    .regex(/^([01]?\d|2[0-3]):[0-5]\d$/, "End time must be in HH:MM format.")
    .optional(),
  tolerance_minutes: z
    .number()
    .int("Tolerance must be an integer.")
    .min(0, "Tolerance must be at least 0 minutes.")
    .optional(),
});

export type TUpdateShiftValidation = z.infer<typeof updateShiftValidation>;
