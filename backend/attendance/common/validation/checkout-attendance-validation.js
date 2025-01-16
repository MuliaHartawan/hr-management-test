const { z } = require("zod");

const checkoutAttendanceSchema = z.object({
  employee_id: z
    .number()
    .int({ message: "Employee ID must be an integer" })
    .min(1, { message: "Employee ID is required" }),
  clock_out_photo: z.any(),
  clock_out_location: z
    .string()
    .max(255, { message: "Clock-out location cannot exceed 255 characters" })
    .optional(),
  notes: z
    .string()
    .max(1000, { message: "Notes cannot exceed 1000 characters" })
    .optional(),
});

module.exports = checkoutAttendanceSchema;
