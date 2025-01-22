import * as React from "react";
import {
  Outlet,
  createRootRouteWithContext,
  redirect,
} from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";
import NotFoundComponent from "./not-found";

export const Route = createRootRouteWithContext<{
  queryClient?: QueryClient;
  isAuthenticated?: boolean;
  role?: string;
}>()({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  beforeLoad: ({ location }) => {
    if (location.pathname === "/") {
      throw redirect({
        to: "/dashboard",
        search: {
          redirect: location.href,
        },
      });
    }
  },
});

function RootComponent() {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
}
