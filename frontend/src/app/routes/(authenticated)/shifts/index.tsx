import { PageGuard } from "@/app/_components/layouts/guard/page-guard";
import { ROLE } from "@/common/enums/role-enum";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ColumnDef } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { useDeleteShift } from "./-hooks/use-delete-shift";
import { Shift } from "@/common/types/shift";
import { Button } from "@/app/_components/ui/button";
import { EditIcon, EyeIcon, TrashIcon } from "lucide-react";
import { TBreadcrumb } from "@/app/_components/types/breadcrumb-types";
import Page from "@/app/_components/layouts/page/main";
import { ShiftsDataTable } from "./-components/shift-table";
import { DeleteShiftDialog } from "./-components/delete-shift-dialog";

const ShiftsPage = () => {
  useEffect(() => {
    document.title = "Shifts";
  }, []);

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedShiftId, setSelectedShiftId] = useState<number | null>(null);

  const { mutate, isPending } = useDeleteShift();

  const columns: ColumnDef<Shift>[] = [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "start_time",
      header: "Start Time",
    },
    { accessorKey: "end_time", header: "End Time" },
    { accessorKey: "tolerance_minutes", header: "Tolerance Minutes" },
    {
      accessorKey: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <div className="flex gap-2">
          <Link to={`/shifts/$shiftId`} params={{ shiftId: row.original.id }}>
            <Button variant="outline">
              <EyeIcon color="green" />
            </Button>
          </Link>
          <Link
            to={`/shifts/$shiftId/update`}
            params={{ shiftId: row.original.id }}
          >
            <Button variant="outline">
              <EditIcon color="blue" />
            </Button>
          </Link>
          <Button
            variant="outline"
            onClick={() => {
              setSelectedShiftId(Number(row.original.id));
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
      label: "Shifts",
      path: "/shifts",
    },
  ];

  return (
    <PageGuard allowedRoles={[ROLE.HRD]}>
      <Page
        breadcrumbs={breadcrumbs}
        title="Shifts"
        description="List of shifts"
        topActions={<TopActions />}
      >
        <ShiftsDataTable columns={columns} />
        <DeleteShiftDialog
          isOpen={modalIsOpen}
          onClose={() => setModalIsOpen(false)}
          onConfirm={() => {
            mutate(selectedShiftId!);
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
    <Link to="/shifts/create">
      <Button>Create Shift</Button>
    </Link>
  );
};

export const Route = createFileRoute("/(authenticated)/shifts/")({
  component: ShiftsPage,
});
