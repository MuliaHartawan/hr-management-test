import { PageGuard } from "@/app/_components/layouts/guard/page-guard";
import Page from "@/app/_components/layouts/page/main";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/app/_components/ui/table";
import { ROLE } from "@/common/enums/role-enum";
import { createFileRoute } from "@tanstack/react-router";
import { useGetUser } from "./-hooks/use-get-user";
import { TBreadcrumb } from "@/app/_components/types/breadcrumb-types";
import { useEffect } from "react";
import { Badge } from "@/app/_components/ui/badge";

export const UserPage = () => {
  useEffect(() => {
    document.title = "Details for User";
  }, []);

  const { userId } = Route.useParams();

  const { data, isLoading } = useGetUser(Number(userId));

  const breadcrumbs: TBreadcrumb[] = [
    {
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      label: "Users",
      path: "/users",
    },
    {
      label: `Details for ${data?.email || "Loading..."}`,
      path: "/users/$userId",
    },
  ];

  return (
    <PageGuard allowedRoles={[ROLE.HRD]}>
      <Page
        isLoading={isLoading}
        breadcrumbs={breadcrumbs}
        title={`Details for ${data?.email || "Loading..."}`}
      >
        <Table>
          <TableBody>
            <TableRow>
              <TableHead className="font-bold">Email</TableHead>
              <TableCell>{data?.email}</TableCell>
            </TableRow>
            <TableRow>
              <TableHead className="font-bold">Role</TableHead>
              <TableCell>{data?.role.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableHead className="font-bold">Is Active</TableHead>
              <TableCell>
                <Badge
                  className={
                    data?.is_active
                      ? "bg-green-200 text-green-600"
                      : "bg-red-200 text-red-600"
                  }
                >
                  {data?.is_active ? "Active" : "Inactive"}
                </Badge>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableHead className="font-bold">Created At</TableHead>
              <TableCell>{data?.created_at}</TableCell>
            </TableRow>
            <TableRow>
              <TableHead className="font-bold">Updated At</TableHead>
              <TableCell>{data?.updated_at}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Page>
    </PageGuard>
  );
};
export const Route = createFileRoute("/(authenticated)/users/$userId/")({
  component: UserPage,
});
