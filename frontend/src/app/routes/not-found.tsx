import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "../_components/ui/button";

const NotFoundComponent = () => {
  return (
    <>
      <div className="flex h-screen w-screen flex-col items-center justify-center gap-2">
        <p className="text-lg">404 | Page not found</p>
        <Link to="/">
          <Button type="button">Go back home</Button>
        </Link>
      </div>
    </>
  );
};

export default NotFoundComponent;

export const Route = createFileRoute("/not-found")({
  component: NotFoundComponent,
});
