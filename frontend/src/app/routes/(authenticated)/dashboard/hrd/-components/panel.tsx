import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import { TDashboardDataMapped } from "../../-types/dashboard-data-type";
import { ShieldAlertIcon, UserIcon } from "lucide-react";

export const Panel = ({ data }: { data: TDashboardDataMapped }) => {
  return (
    <div className="w-full grid grid-cols-2 gap-5">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Employee</CardTitle>
          <UserIcon />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.employeeCount}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Attendance with pending status
          </CardTitle>
          <ShieldAlertIcon />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.attendanceCount}</div>
        </CardContent>
      </Card>
    </div>
  );
};
