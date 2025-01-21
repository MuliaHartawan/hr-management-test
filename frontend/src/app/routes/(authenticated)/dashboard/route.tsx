import { useUser } from "@/app/_hooks/auth/use-user";
import { ROLE } from "@/common/enums/role-enum";
import { createFileRoute, Outlet, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/(authenticated)/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data: user, isLoading } = useUser();

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoading) return;

    if (user?.role.name === ROLE.HRD) {
      navigate({ to: "/dashboard/hrd", replace: true });
    } else if (user?.role.name === ROLE.STAFF) {
      navigate({ to: "/dashboard/staff", replace: true });
    }
  }, [user, isLoading, navigate]);

  return <Outlet />;
}
