import { Employee } from "@/common/types/employee";

type TAttendanceMarkerResponse = {
  clock_in: string;
  clock_in_location: string;
  clock_in_photo: string;
  clock_out: string;
  clock_out_location: string;
  clock_out_photo: string;
  date: string;
  employee: Employee;
};

export type TDashboardData = {
  attendanceCount: number;
  attendanceMarker: TAttendanceMarkerResponse[];
  employeeCount: number;
};

export type TAttendanceMarkerMapped = Omit<
  TAttendanceMarkerResponse,
  "clock_in_location" | "clock_out_location"
> & {
  clock_in_location: [number, number] | null;
  clock_out_location: [number, number] | null;
};

export type TDashboardDataMapped = Omit<TDashboardData, "attendanceMarker"> & {
  attendanceMarker: TAttendanceMarkerMapped[];
};
