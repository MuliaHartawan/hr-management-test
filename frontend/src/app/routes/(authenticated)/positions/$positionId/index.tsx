import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { useGetPosition } from "./-hooks/use-get-position";
import { TBreadcrumb } from "@/app/_components/types/breadcrumb-types";
import { ROLE } from "@/common/enums/role-enum";
import { PageGuard } from "@/app/_components/layouts/guard/page-guard";
import Page from "@/app/_components/layouts/page/main";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/app/_components/ui/table";

export const PositionPage = () => {
  useEffect(() => {
    document.title = "Details for Position";
  }, []);

  const { positionId } = Route.useParams();

  const { data, isLoading } = useGetPosition(Number(positionId));

  const breadcrumbs: TBreadcrumb[] = [
    {
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      label: "Positions",
      path: "/positions",
    },
    {
      label: `Details for ${data?.name || "Loading..."}`,
      path: "/positions/$positionId",
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
              <TableHead className="font-bold">Department</TableHead>
              <TableCell>{data?.department.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableHead className="font-bold">Created At</TableHead>
              <TableCell>{data?.created_at}</TableCell>
            </TableRow>
            <TableRow>
              <TableHead className="font-bold">Updated At</TableHead>
              <TableCell>{data?.updated_at}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Page>
    </PageGuard>
  );
};

export const Route = createFileRoute("/(authenticated)/positions/$positionId/")(
  {
    component: PositionPage,
  }
);
