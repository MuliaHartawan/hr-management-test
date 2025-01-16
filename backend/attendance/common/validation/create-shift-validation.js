const { z } = require("zod");

const createShiftSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .max(50, { message: "Name cannot exceed 50 characters" }),
  start_time: z
    .string()
    .refine((val) => /^([0-1]?[0-9]|2[0-3]):([0-5][0-9])$/.test(val), {
      message: "Start time must be a valid time format (HH:mm)",
    }),
  end_time: z
    .string()
    .refine((val) => /^([0-1]?[0-9]|2[0-3]):([0-5][0-9])$/.test(val), {
      message: "End time must be a valid time format (HH:mm)",
    }),
  tolerance_minutes: z
    .number()
    .int()
    .min(0, { message: "Tolerance minutes must be at least 0" })
    .optional(),
});

module.exports = createShiftSchema;
