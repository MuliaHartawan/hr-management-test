import { PageGuard } from "@/app/_components/layouts/guard/page-guard";
import { ROLE } from "@/common/enums/role-enum";
import { createFileRoute } from "@tanstack/react-router";
import { AttendancesReportTable } from "./-components/attendances-report-table";
import { useEffect } from "react";

export const Route = createFileRoute("/(authenticated)/attendances/reports/")({
  component: RouteComponent,
});

function RouteComponent() {
  useEffect(() => {
    document.title = "Attendance Report";
  }, []);

  return (
    <PageGuard allowedRoles={[ROLE.HRD]}>
      <div>
        <AttendancesReportTable />
      </div>
    </PageGuard>
  );
}
