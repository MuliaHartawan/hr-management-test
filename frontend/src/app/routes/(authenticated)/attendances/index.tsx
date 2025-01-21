import { createFileRoute } from "@tanstack/react-router";
import { AttendancesTable } from "./-components/attendances-table";

export const Route = createFileRoute("/(authenticated)/attendances/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="py-5">
      <AttendancesTable />
    </div>
  );
}
