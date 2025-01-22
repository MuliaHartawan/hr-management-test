import { createFileRoute } from "@tanstack/react-router";
import { AttendancesTable } from "./-components/attendances-history-table";
import { PageGuard } from "@/app/_components/layouts/guard/page-guard";
import Page from "@/app/_components/layouts/page/main";
import { ROLE } from "@/common/enums/role-enum";
import { TBreadcrumb } from "@/app/_components/types/breadcrumb-types";
import { useEffect } from "react";

export const Route = createFileRoute("/(authenticated)/attendances/history/")({
  component: RouteComponent,
});

function RouteComponent() {
  useEffect(() => {
    document.title = "Attendance History";
  }, []);

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
      label: `History`,
      path: "//history",
    },
  ];
  return (
    <PageGuard allowedRoles={[ROLE.HRD, ROLE.STAFF]}>
      <Page
        breadcrumbs={breadcrumbs}
        title={`History`}
        description="List history of attendances"
        isLoading={false}
      >
        <AttendancesTable />
      </Page>
    </PageGuard>
  );
}
