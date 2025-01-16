const { z } = require("zod");

const employeeCreateSchema = z.object({
  user_id: z.number().int().min(1, "User ID is required"),
  employee_id: z.number().int().min(1, "Employee ID is required"),
  first_name: z.string().min(1, "First name is required").max(100),
  last_name: z.string().max(100).optional(),
  department_id: z.number().min(1),
  position_id: z.number().min(1),
  shift_id: z.number().int().optional(),
  phone: z.string().max(13).optional(),
  address: z.string().optional(),
  join_date: z.string().date().optional(),
});

module.exports = employeeCreateSchema;
