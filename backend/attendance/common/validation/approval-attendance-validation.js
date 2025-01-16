const { z } = require("zod");

const approvalAttendanceSchema = z.object({
  verified_by: z.number({ message: "verified by must be an integer" }),
  attendance_ids: z.array(z.number(), {
    message: "attendance ids must be an array of numbers",
  }),
  status: z.enum(["PENDING", "APPROVED", "REJECTED"]),
});

module.exports = approvalAttendanceSchema;
