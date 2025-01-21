import MainLayout from "@/app/_components/layouts/app/main";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/(authenticated)")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <MainLayout>
        <Outlet />
      </MainLayout>
    </>
  );
}
