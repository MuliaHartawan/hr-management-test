import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { useGetEmployee } from "./-hooks/use-get-employee";
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

export const EmployeePage = () => {
  useEffect(() => {
    document.title = "Employee Details";
  }, []);

  const { employeeId } = Route.useParams();

  const { data, isLoading } = useGetEmployee(Number(employeeId));

  const breadcrumbs: TBreadcrumb[] = [
    {
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      label: "Employees",
      path: "/employees",
    },
    {
      label: `Details for ${
        data?.first_name && data?.last_name
          ? `${data?.first_name} ${data?.last_name}`
          : "Loading..."
      }`,
      path: `/employees/$employeeId`,
    },
  ];

  return (
    <PageGuard allowedRoles={[ROLE.HRD]}>
      <Page
        isLoading={isLoading}
        breadcrumbs={breadcrumbs}
        title={`Details for ${
          data?.first_name && data?.last_name
            ? `${data.first_name} ${data.last_name}`
            : "Loading..."
        }`}
      >
        <Table>
          <TableBody>
            <TableRow>
              <TableHead className="font-bold">First Name</TableHead>
              <TableCell>{data?.first_name}</TableCell>
            </TableRow>
            <TableRow>
              <TableHead className="font-bold">Last Name</TableHead>
              <TableCell>{data?.last_name}</TableCell>
            </TableRow>
            <TableRow>
              <TableHead className="font-bold">Department</TableHead>
              <TableCell>{data?.department.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableHead className="font-bold">Position</TableHead>
              <TableCell>{data?.position.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableHead className="font-bold">Shift</TableHead>
              <TableCell>{data?.shift.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableHead className="font-bold">Phone</TableHead>
              <TableCell>{data?.phone ?? "No phone"}</TableCell>
            </TableRow>
            <TableRow>
              <TableHead className="font-bold">Address</TableHead>
              <TableCell>
                {data?.address.trim() == "" ? "No address" : data?.address}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableHead className="font-bold">Join Date</TableHead>
              <TableCell>{data?.join_date}</TableCell>
            </TableRow>
            <TableRow>
              <TableHead className="font-bold">Role</TableHead>
              <TableCell>{data?.user.role.name}</TableCell>
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

export const Route = createFileRoute("/(authenticated)/employees/$employeeId/")(
  {
    component: EmployeePage,
  }
);
