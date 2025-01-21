import { AttendanceStatusEnum } from "../enums/attendance-status-enum";
import { Employee } from "./employee";
import { User } from "./user";

export type Attendance = {
  readonly id: string;
  readonly date: Date;
  readonly clock_in: Date;
  readonly clock_in_photo: Date;
  readonly clock_in_location: string;
  readonly clock_out: Date;
  readonly clock_out_photo: Date;
  readonly clock_out_location: string;
  readonly status: AttendanceStatusEnum;
  readonly verified_at: Date;
  readonly note: string;
  readonly verified_by: User;
  readonly employee: Employee;
  readonly created_at: Date;
  readonly updated_at: Date;
};
