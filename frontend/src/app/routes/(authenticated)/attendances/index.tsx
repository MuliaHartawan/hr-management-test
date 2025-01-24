import { createFileRoute, Link } from "@tanstack/react-router";
import { PageGuard } from "@/app/_components/layouts/guard/page-guard";
import { ROLE } from "@/common/enums/role-enum";
import Page from "@/app/_components/layouts/page/main";
import { Button } from "@/app/_components/ui/button";
import { TBreadcrumb } from "@/app/_components/types/breadcrumb-types";
import { AttendancesTable } from "./-components/attendance-table";
import { ComponentGuard } from "@/app/_components/layouts/guard/component-guard";
import { useEffect } from "react";
import Clock from "react-live-clock";
import { Badge } from "@/app/_components/ui/badge";
import { useGetStatusAttendance } from "./-hooks/use-get-status-attendance";

const TopActions = () => {
  const { data: statusAttendance } = useGetStatusAttendance();
  return (
    <ComponentGuard allowedRoles={[ROLE.STAFF]}>
      <div className="flex gap-5">
        {(!statusAttendance || !statusAttendance.clock_in) && (
          <Link to="/attendances/presence/clock_in">
            <Button>Clock In</Button>
          </Link>
        )}
        {statusAttendance &&
          statusAttendance.clock_in &&
          !statusAttendance.clock_out && (
            <Link to="/attendances/presence/clock_out">
              <Button>Clock Out</Button>
            </Link>
          )}
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
        title={
          <>
            Attendaces |{" "}
            <Badge className="text-xl " variant={"outline"}>
              <Clock ticking={true} timezone="Asia/Jakarta" format="hh:mm:ss" />
            </Badge>
          </>
        }
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
