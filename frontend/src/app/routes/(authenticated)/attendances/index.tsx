import { createFileRoute, Link } from "@tanstack/react-router";
import { PageGuard } from "@/app/_components/layouts/guard/page-guard";
import { ROLE } from "@/common/enums/role-enum";
import Page from "@/app/_components/layouts/page/main";
import { Button } from "@/app/_components/ui/button";
import { TBreadcrumb } from "@/app/_components/types/breadcrumb-types";
import { AttendancesTable } from "./-components/attendance-table";
import { ComponentGuard } from "@/app/_components/layouts/guard/component-guard";
import { useEffect } from "react";

const TopActions = () => {
  return (
    <ComponentGuard allowedRoles={[ROLE.STAFF]}>
      <div className="flex gap-5">
        <Link to="/attendances/presence/clock_in">
          <Button>Clock In</Button>
        </Link>
        <Link to="/attendances/presence/clock_out">
          <Button>Clock Out</Button>
        </Link>
      </div>
    </ComponentGuard>
  );
};

const AttendancesPage = () => {
  useEffect(() => {
    document.title = "Attendances";
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
  ];

  return (
    <PageGuard allowedRoles={[ROLE.HRD, ROLE.STAFF]}>
      <Page
        title="Attendances"
        breadcrumbs={breadcrumbs}
        description="List of attendances"
        topActions={<TopActions />}
      >
        <AttendancesTable />
      </Page>
    </PageGuard>
  );
};

export const Route = createFileRoute("/(authenticated)/attendances/")({
  component: AttendancesPage,
});
