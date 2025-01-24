import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useDeleteEmployee } from "./-hooks/use-delete-employee";
import { ColumnDef } from "@tanstack/react-table";
import { Employee } from "@/common/types/employee";
import { Button } from "@/app/_components/ui/button";
import { EditIcon, EyeIcon, TrashIcon } from "lucide-react";
import { TBreadcrumb } from "@/app/_components/types/breadcrumb-types";
import { PageGuard } from "@/app/_components/layouts/guard/page-guard";
import { ROLE } from "@/common/enums/role-enum";
import Page from "@/app/_components/layouts/page/main";
import { EmployeeDataTable } from "./-components/employees-table";
import { DeleteEmployeeDialog } from "./-components/delete-employee-dialog";

const EmployeesPage = () => {
  useEffect(() => {
    document.title = "Employees";
  }, []);

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState<number | null>(
    null
  );

  const { mutate, isPending } = useDeleteEmployee();

  const columns: ColumnDef<Employee>[] = [
    {
      accessorKey: "nip",
      header: "NIP",
    },
    {
      accessorKey: "full_name",
      header: "Full Name",
      cell: ({ row }) => (
        <p>
          {row.original.first_name ?? ""} {row.original.last_name ?? ""}
        </p>
      ),
    },
    {
      accessorKey: "department",
      header: "Department",
      cell: ({ row }) => <p>{row.original.department.name}</p>,
    },
    {
      accessorKey: "position",
      header: "Position",
      cell: ({ row }) => <p>{row.original.position.name}</p>,
    },
    {
      accessorKey: "shift",
      header: "Shift",
      cell: ({ row }) => <p>{row.original.shift.name}</p>,
    },
    {
      accessorKey: "role",
      header: "Role",
      cell: ({ row }) => <p>{row.original.user.role.name}</p>,
    },
    {
      accessorKey: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <div className="flex gap-2">
          <Link
            to={`/employees/$employeeId`}
            params={{ employeeId: row.original.id }}
          >
            <Button variant="outline">
              <EyeIcon color="green" />
            </Button>
          </Link>
          <Link
            to={`/employees/$employeeId/update`}
            params={{ employeeId: row.original.id }}
          >
            <Button variant="outline">
              <EditIcon color="blue" />
            </Button>
          </Link>
          <Button
            variant="outline"
            onClick={() => {
              setSelectedEmployeeId(Number(row.original.id));
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
      label: "Employees",
      path: "/employees",
    },
  ];

  return (
    <PageGuard allowedRoles={[ROLE.HRD]}>
      <Page
        breadcrumbs={breadcrumbs}
        title="Employees"
        description="List of employees"
        topActions={<TopActions />}
      >
        <EmployeeDataTable columns={columns} />
        <DeleteEmployeeDialog
          isOpen={modalIsOpen}
          onClose={() => setModalIsOpen(false)}
          onConfirm={() => {
            mutate(selectedEmployeeId!);
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
    <Link to="/employees/create">
      <Button>Create Employee</Button>
    </Link>
  );
};

export const Route = createFileRoute("/(authenticated)/employees/")({
  component: EmployeesPage,
});
