import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/(authenticated)/dashboard/staff/")({
  component: RouteComponent,
});

function RouteComponent() {
  useEffect(() => {
    document.title = "Dashboard Staff";
  }, []);

  return <div>Hello "/(authenticated)/dashboard/staff/"!</div>;
}
