import { PageGuard } from "@/app/_components/layouts/guard/page-guard";
import Page from "@/app/_components/layouts/page/main";
import { TBreadcrumb } from "@/app/_components/types/breadcrumb-types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/app/_components/ui/table";
import { ROLE } from "@/common/enums/role-enum";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { useGetDepartment } from "./-hooks/use-get-department";

export const DepartmentPage = () => {
  useEffect(() => {
    document.title = "Details for Department";
  }, []);

  const { departmentId } = Route.useParams();

  const { data, isLoading } = useGetDepartment(Number(departmentId));

  const breadcrumbs: TBreadcrumb[] = [
    {
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      label: "Departments",
      path: "/departments",
    },
    {
      label: `Details for ${data?.name || "Loading..."}`,
      path: `/departments/${departmentId}`,
    },
  ];

  return (
    <PageGuard allowedRoles={[ROLE.HRD]}>
      <Page
        isLoading={isLoading}
        breadcrumbs={breadcrumbs}
        title={`Details for ${data?.email || "Loading..."}`}
      >
        <Table>
          <TableBody>
            <TableRow>
              <TableHead className="font-bold">Name</TableHead>
              <TableCell>{data?.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableHead className="font-bold">Description</TableHead>
              <TableCell>{data?.description}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Page>
    </PageGuard>
  );
};

export const Route = createFileRoute(
  "/(authenticated)/departments/$departmentId/"
)({
  component: DepartmentPage,
});
