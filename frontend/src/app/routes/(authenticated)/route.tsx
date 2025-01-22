import MainLayout from "@/app/_components/layouts/app/main";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/(authenticated)")({
  component: RouteComponent,
  beforeLoad: ({ context, location }) => {
    if (!context.isAuthenticated) {
      throw redirect({
        to: "/auth/login",
        search: {
          redirect: location.href,
        },
      });
    }
  },
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
