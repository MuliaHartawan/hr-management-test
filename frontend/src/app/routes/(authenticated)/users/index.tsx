import { PageGuard } from "@/app/_components/layouts/guard/page-guard";
import { ROLE } from "@/common/enums/role-enum";
import { createFileRoute, Link } from "@tanstack/react-router";
import { UsersDataTable } from "./-components/users-table";
import Page from "@/app/_components/layouts/page/main";
import { TBreadcrumb } from "@/app/_components/types/breadcrumb-types";
import { Button } from "@/app/_components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { User } from "@/common/types/user";
import { EditIcon, EyeIcon, TrashIcon } from "lucide-react";
import { useState } from "react";
import { useDeleteUser } from "./-hooks/use-delete-user";
import { DeleteUserDialog } from "./-components/delete-user-dialog";
import { Badge } from "@/app/_components/ui/badge";

const UsersPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  const { mutate, isPending } = useDeleteUser();

  const columns: ColumnDef<User>[] = [
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "is_active",
      header: "Is Active",
      cell: ({ row }) => (
        <Badge
          className={
            row.original.is_active
              ? "bg-green-200 text-green-600"
              : "bg-red-200 text-red-600"
          }
        >
          {row.original.is_active ? "Active" : "Inactive"}
        </Badge>
      ),
    },
    {
      accessorKey: "role",
      header: "Role",
      cell: ({ row }) => <p>{row.original.role.name}</p>,
    },
    {
      accessorKey: "created_at",
      header: "Created At",
    },
    {
      accessorKey: "updated_at",
      header: "Updated At",
    },
    {
      accessorKey: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <div className="flex gap-2">
          <Link to={`/users/$userId`} params={{ userId: row.original.id }}>
            <Button variant="outline">
              <EyeIcon color="green" />
            </Button>
          </Link>
          <Link
            to={`/users/$userId/update`}
            params={{ userId: row.original.id }}
          >
            <Button variant="outline">
              <EditIcon color="blue" />
            </Button>
          </Link>
          <Button
            variant="outline"
            onClick={() => {
              setSelectedUserId(Number(row.original.id));
              setModalIsOpen(true);
            }}
          >
            <TrashIcon color="red" />
          </Button>
        </div>
      ),
    },
  ];

  const breadcrumbs: TBreadcrumb[] = [
    {
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      label: "Users",
      path: "/users",
    },
  ];

  return (
    <PageGuard allowedRoles={[ROLE.HRD]}>
      <Page
        breadcrumbs={breadcrumbs}
        title="Users"
        description="List of users"
        topActions={<TopActions />}
      >
        <UsersDataTable columns={columns} />
        <DeleteUserDialog
          isOpen={modalIsOpen}
          onClose={() => setModalIsOpen(false)}
          onConfirm={() => {
            mutate(selectedUserId!);
            setModalIsOpen(false);
          }}
          isDeleting={isPending}
        />
      </Page>
    </PageGuard>
  );
};

const TopActions = () => {
  return (
    <Link to="/users/create">
      <Button>Create User</Button>
    </Link>
  );
};

export const Route = createFileRoute("/(authenticated)/users/")({
  component: UsersPage,
});
