import { PageGuard } from "@/app/_components/layouts/guard/page-guard";
import { ROLE } from "@/common/enums/role-enum";
import { createFileRoute, Link } from "@tanstack/react-router";
import { DepartmentsDataTable } from "./-components/departments-table";
import { useState } from "react";
import { useDeleteDepartment } from "./-hooks/use-delete-department";
import { Department } from "@/common/types/department";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/app/_components/ui/button";
import { EditIcon, EyeIcon, TrashIcon } from "lucide-react";
import { TBreadcrumb } from "@/app/_components/types/breadcrumb-types";
import Page from "@/app/_components/layouts/page/main";
import { DeleteDepartmentDialog } from "./-components/delete-user-dialog";

const DepartmentsPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedDepartmentId, setSelectedDepartmentId] = useState<
    number | null
  >(null);

  const { mutate, isPending } = useDeleteDepartment();

  const columns: ColumnDef<Department>[] = [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "description",
      header: "Description",
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
          <Link
            to={`/departments/$departmentId`}
            params={{ departmentId: row.original.id.toString() }}
          >
            <Button variant="outline">
              <EyeIcon color="green" />
            </Button>
          </Link>
          <Link
            to={`/departments/$departmentId/update`}
            params={{ departmentId: row.original.id.toString() }}
          >
            <Button variant="outline">
              <EditIcon color="blue" />
            </Button>
          </Link>
          <Button
            variant="outline"
            onClick={() => {
              setSelectedDepartmentId(Number(row.original.id));
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
      label: "Departments",
      path: "/departments",
    },
  ];

  return (
    <PageGuard allowedRoles={[ROLE.HRD]}>
      <Page
        title="Departments"
        breadcrumbs={breadcrumbs}
        description="List of departments"
        topActions={<TopActions />}
      >
        <DepartmentsDataTable columns={columns} />
        <DeleteDepartmentDialog
          isOpen={modalIsOpen}
          onClose={() => setModalIsOpen(false)}
          onConfirm={() => {
            mutate(selectedDepartmentId!);
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
    <Link to="/departments/create">
      <Button>Create Department</Button>
    </Link>
  );
};

export const Route = createFileRoute("/(authenticated)/departments/")({
  component: DepartmentsPage,
});
