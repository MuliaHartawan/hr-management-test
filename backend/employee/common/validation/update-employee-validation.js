const { z } = require("zod");

const employeeUpdateSchema = z.object({
  user_id: z.number().int().min(1).optional(),
  employee_id: z.number().int().min(1).optional(),
  first_name: z.string().min(1).max(100).optional(),
  last_name: z.string().max(100).optional(),
  department_id: z.number().min(1).optional(),
  position_id: z.number().min(1).optional(),
  shift_id: z.number().int().optional(),
  phone: z.string().max(20).optional(),
  address: z.string().optional(),
  join_date: z.string().date().optional(),
});

module.exports = employeeUpdateSchema;
