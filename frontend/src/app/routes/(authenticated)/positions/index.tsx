import { PageGuard } from "@/app/_components/layouts/guard/page-guard";
import { ROLE } from "@/common/enums/role-enum";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PositionsDataTable } from "./-components/positions-table";
import { ColumnDef } from "@tanstack/react-table";
import { Position } from "@/common/types/position";
import Page from "@/app/_components/layouts/page/main";
import { TBreadcrumb } from "@/app/_components/types/breadcrumb-types";
import { Button } from "@/app/_components/ui/button";
import { useDeletePosition } from "./-hooks/use-delete-position";
import { DeletePositionDialog } from "./-components/delete-position-dialog";
import { useEffect, useState } from "react";
import { EditIcon, EyeIcon, TrashIcon } from "lucide-react";

const PositionsPage = () => {
  useEffect(() => {
      document.title = "Positions";
    }, []);

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedPositionId, setSelectedPositionId] = useState<number | null>(
    null
  );

  const { mutate, isPending } = useDeletePosition();

  const columns: ColumnDef<Position>[] = [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "department",
      header: "Department",
      cell: ({ row }) => <p>{row.original.department.name}</p>,
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
            to={`/positions/$positionId`}
            params={{ positionId: row.original.id.toString() }}
          >
            <Button variant="outline">
              <EyeIcon color="green" />
            </Button>
          </Link>
          <Link
            to={`/positions/$positionId/update`}
            params={{ positionId: row.original.id.toString() }}
          >
            <Button variant="outline">
              <EditIcon color="blue" />
            </Button>
          </Link>
          <Button
            variant="outline"
            onClick={() => {
              setSelectedPositionId(Number(row.original.id));
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
      label: "Positions",
      path: "/positions",
    },
  ];

  return (
    <PageGuard allowedRoles={[ROLE.HRD]}>
      <Page
        breadcrumbs={breadcrumbs}
        title="Positions"
        description="List of positions"
        topActions={<TopActions />}
      >
        <PositionsDataTable columns={columns} />
        <DeletePositionDialog
          isOpen={modalIsOpen}
          onClose={() => setModalIsOpen(false)}
          onConfirm={() => {
            mutate(selectedPositionId!);
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
    <Link to="/positions/create">
      <Button>Create Position</Button>
    </Link>
  );
};

export const Route = createFileRoute("/(authenticated)/positions/")({
  component: PositionsPage,
});
