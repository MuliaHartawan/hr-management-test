import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(authenticated)/dashboard/hrd/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(authenticated)/dashboard/hrd/"!</div>
}
