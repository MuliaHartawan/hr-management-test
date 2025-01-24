import { createFileRoute } from "@tanstack/react-router";
import { AttendancesTable as TableEmplyee } from "./-components/attendances-employee-table";
import { PageGuard } from "@/app/_components/layouts/guard/page-guard";
import Page from "@/app/_components/layouts/page/main";
import { ROLE } from "@/common/enums/role-enum";
import { TBreadcrumb } from "@/app/_components/types/breadcrumb-types";
import { useEffect } from "react";
import { useUser } from "@/app/_hooks/auth/use-user";
import { jwtDecode } from "jwt-decode";
import { Payload } from "@/types/payload";
import { AttendancesMeTable } from "./-components/attendances-history-table-staff";

export const Route = createFileRoute("/(authenticated)/attendances/history/")({
  component: RouteComponent,
});

function RouteComponent() {
  useEffect(() => {
    document.title = "Attendance History";
  }, []);
  const token = localStorage.getItem("token");
  const decodedToken = jwtDecode<Payload>(token!);
  const { data: user, isLoading } = useUser();

  const breadcrumbs: TBreadcrumb[] = [
    {
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      label: "Attendances",
      path: "/attendances",
    },
    user?.role.name === ROLE.HRD
      ? {
          label: "Employee Attendances",
          path: "/employee/",
        }
      : {
          label: `History`,
          path: `/${decodedToken.employee_id}`,
        },
  ];

  return (
    <PageGuard allowedRoles={[ROLE.HRD, ROLE.STAFF]}>
      <Page
        breadcrumbs={breadcrumbs}
        title={
          user?.role.name === ROLE.HRD ? "Employee Attendances" : "History"
        }
        description={
          user?.role.name === ROLE.HRD
            ? "List history of attendances"
            : "List of attendances"
        }
        isLoading={false}
      >
        {user?.role.name === ROLE.HRD && !isLoading ? (
          <TableEmplyee />
        ) : (
          <AttendancesMeTable />
        )}
      </Page>
    </PageGuard>
  );
}
