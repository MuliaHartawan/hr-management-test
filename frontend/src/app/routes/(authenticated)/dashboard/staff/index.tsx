import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(authenticated)/dashboard/staff/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/(authenticated)/dashboard/staff/"!</div>;
}
