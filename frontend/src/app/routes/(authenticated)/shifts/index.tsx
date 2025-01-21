import { PageGuard } from "@/app/_components/layouts/guard/page-guard";
import { ROLE } from "@/common/enums/role-enum";
import { createFileRoute } from "@tanstack/react-router";
import { ShiftsDataTable } from "./-components/positions-table";

export const Route = createFileRoute("/(authenticated)/shifts/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <PageGuard allowedRoles={[ROLE.HRD]}>
      <div>
        <ShiftsDataTable />
      </div>
    </PageGuard>
  );
}
