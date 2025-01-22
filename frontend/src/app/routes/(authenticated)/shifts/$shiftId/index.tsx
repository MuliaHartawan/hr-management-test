import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { useGetShift } from "./-hooks/use-get-shift";
import { TBreadcrumb } from "@/app/_components/types/breadcrumb-types";
import { PageGuard } from "@/app/_components/layouts/guard/page-guard";
import { ROLE } from "@/common/enums/role-enum";
import Page from "@/app/_components/layouts/page/main";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/app/_components/ui/table";

export const ShiftPage = () => {
  useEffect(() => {
    document.title = "Details for Shift";
  }, []);

  const { shiftId } = Route.useParams();

  const { data, isLoading } = useGetShift(Number(shiftId));

  const breadcrumbs: TBreadcrumb[] = [
    {
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      label: "Shifts",
      path: "/shifts",
    },
    {
      label: `Details for ${data?.name || "Loading..."}`,
      path: "/shifts/$shiftId",
    },
  ];

  return (
    <PageGuard allowedRoles={[ROLE.HRD]}>
      <Page
        isLoading={isLoading}
        breadcrumbs={breadcrumbs}
        title={`Details for ${data?.name || "Loading..."}`}
      >
        <Table>
          <TableBody>
            <TableRow>
              <TableHead className="font-bold">Name</TableHead>
              <TableCell>{data?.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableHead className="font-bold">Start Time</TableHead>
              <TableCell>{data?.start_time}</TableCell>
            </TableRow>
            <TableRow>
              <TableHead className="font-bold">End Time</TableHead>
              <TableCell>{data?.end_time}</TableCell>
            </TableRow>
            <TableRow>
              <TableHead className="font-bold">Tolerance Minutes</TableHead>
              <TableCell>{data?.tolerance_minutes}</TableCell>
            </TableRow>
            <TableRow>
              <TableHead className="font-bold">Created At</TableHead>
              <TableCell>{data?.created_at}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Page>
    </PageGuard>
  );
};

export const Route = createFileRoute("/(authenticated)/shifts/$shiftId/")({
  component: ShiftPage,
});
