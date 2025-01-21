import { createFileRoute } from "@tanstack/react-router";
import { Button } from "../_components/ui/button";

export const Route = createFileRoute("/denied")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div className="flex h-screen w-screen flex-col items-center justify-center gap-2">
        <p className="text-lg">403 | Forbidden</p>
        <Button type="button" onClick={() => window.location.replace("/")}>
          Go back home
        </Button>
      </div>
    </>
  );
}
