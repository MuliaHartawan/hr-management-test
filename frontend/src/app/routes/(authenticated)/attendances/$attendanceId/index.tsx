import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { useGetAttendance } from "./-hooks/use-get-attendance";
import { TBreadcrumb } from "@/app/_components/types/breadcrumb-types";
import { PageGuard } from "@/app/_components/layouts/guard/page-guard";
import Page from "@/app/_components/layouts/page/main";
import { ROLE } from "@/common/enums/role-enum";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/app/_components/ui/table";
import { RenderGoogleMap } from "../-components/render-map";

export const AttendancePage = () => {
  useEffect(() => {
    document.title = "Details for Attendance";
  }, []);

  const { attendanceId } = Route.useParams();

  const { data, isLoading } = useGetAttendance(Number(attendanceId));

  const breadcrumbs: TBreadcrumb[] = [
    {
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      label: "Attendances",
      path: "/attendances",
    },
    {
      label: `Details for ${data?.employee.first_name} ${data?.employee.last_name}`,
      path: "/attendances/$attendanceId",
    },
  ];

  return (
    <PageGuard allowedRoles={[ROLE.HRD, ROLE.STAFF]}>
      <Page
        isLoading={isLoading}
        breadcrumbs={breadcrumbs}
        title={`Details for ${data?.employee.first_name} ${data?.employee.last_name}`}
      >
        <Table>
          <TableBody>
            <TableRow>
              <TableHead className="font-bold">Employee</TableHead>
              <TableCell>
                {data?.employee.first_name} {data?.employee.last_name}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableHead className="font-bold">Department</TableHead>
              <TableCell>{data?.employee.department.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableHead className="font-bold">Position</TableHead>
              <TableCell>{data?.employee.position.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableHead className="font-bold">Date</TableHead>
              <TableCell>{data?.date}</TableCell>
            </TableRow>
            <TableRow>
              <TableHead className="font-bold">Clock In</TableHead>
              <TableCell>{data?.clock_in}</TableCell>
            </TableRow>
            <TableRow>
              <TableHead className="font-bold">Clock In Photo</TableHead>
              <TableCell>
                {data?.clock_in_photo ? (
                  <img
                    src={`${import.meta.env.VITE_BASE_URL}/api/v1/uploads/${data?.clock_in_photo}`}
                    alt="Checkin"
                    className="w-64 h-64"
                  />
                ) : (
                  "No photo"
                )}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableHead className="font-bold">Clock In Map</TableHead>
              <TableCell>
                {data?.clock_in_location ? (
                  <RenderGoogleMap
                    location={`https://www.google.com/maps?q=${data?.clock_in_location}`}
                    width="100%"
                    height="300px"
                  />
                ) : (
                  "No location"
                )}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableHead className="font-bold">Clock Out</TableHead>
              <TableCell>
                {data?.clock_out ? data?.clock_out : "No clock out"}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableHead className="font-bold">Clock Out Photo</TableHead>
              <TableCell>
                {data?.clock_out_photo ? (
                  <img
                    src={`${import.meta.env.VITE_BASE_URL}/api/v1/uploads/${data?.clock_out_photo}`}
                    alt="Checkout"
                    className="w-64 h-64"
                  />
                ) : (
                  "No photo"
                )}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableHead className="font-bold">Clock Out Map</TableHead>
              <TableCell>
                {data?.clock_out_location ? (
                  <RenderGoogleMap
                    location={`https://www.google.com/maps?q=${data?.clock_out_location}`}
                    width="100%"
                    height="300px"
                  />
                ) : (
                  "No location"
                )}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableHead className="font-bold">Status</TableHead>
              <TableCell>{data?.status}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Page>
    </PageGuard>
  );
};

export const Route = createFileRoute(
  "/(authenticated)/attendances/$attendanceId/"
)({
  component: AttendancePage,
});
