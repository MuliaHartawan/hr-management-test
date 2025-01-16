const { z } = require("zod");

const checkinAttendanceSchema = z.object({
  employee_id: z.number({ required_error: "Employee ID must be an integer" }),
  clock_in_photo: z.any(),
  clock_in_location: z
    .string()
    .max(255, { message: "Clock-in location cannot exceed 255 characters" })
    .optional(),
  notes: z
    .string()
    .max(1000, { message: "Notes cannot exceed 1000 characters" })
    .optional(),
});

module.exports = checkinAttendanceSchema;
