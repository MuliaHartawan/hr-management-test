import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react';

export const Route = createFileRoute('/(authenticated)/dashboard/hrd/')({
  component: RouteComponent,
})

function RouteComponent() {
  useEffect(() => {
    document.title = "Dashboard HRD";
  }, []);

  return <div>Hello "/(authenticated)/dashboard/hrd/"!</div>
}
