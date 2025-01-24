import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { useGetDashboardData } from "./-hooks/use-get-dashboard-data";
import { MapComponentLeaflet } from "./-components/map-cluster-leaflet";
import { TDashboardDataMapped } from "../-types/dashboard-data-type";
import Page from "@/app/_components/layouts/page/main";
import { Panel } from "./-components/panel";

export const Route = createFileRoute("/(authenticated)/dashboard/hrd/")({
  component: RouteComponent,
});

function RouteComponent() {
  useEffect(() => {
    document.title = "Dashboard HRD";
  }, []);

  const { data, isLoading } = useGetDashboardData();

  return (
    <Page title="Dashboard HRD">
      {!isLoading && (
        <div className="flex flex-col gap-4">
          <Panel data={data as TDashboardDataMapped} />
          <MapComponentLeaflet data={data as TDashboardDataMapped} />
        </div>
      )}
    </Page>
  );
}
