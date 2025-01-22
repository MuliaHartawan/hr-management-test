import { ComponentGuard } from "@/app/_components/layouts/guard/component-guard";
import { Button } from "@/app/_components/ui/button";
import { ROLE } from "@/common/enums/role-enum";
import { Attendance } from "@/common/types/attendance";
import { Link } from "@tanstack/react-router";
import { ColumnDef, Table } from "@tanstack/react-table";
import { EyeIcon } from "lucide-react";
import { useApproval } from "../-hooks/use-approval";
import { useDataTable } from "@/app/_hooks/datatables/use-datatable";
import { useUser } from "@/app/_hooks/auth/use-user";
import { useState } from "react";
import { api } from "@/libs/axios/axios";
import { DataTableResponse } from "@/types/table";
import { DataTable } from "@/app/_components/ui/datatable/datatable";
import { Checkbox } from "@/app/_components/ui/checkbox";

const columns: ColumnDef<Attendance>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <ComponentGuard allowedRoles={[ROLE.HRD]}>
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      </ComponentGuard>
    ),
    cell: ({ row }) => (
      <ComponentGuard allowedRoles={[ROLE.HRD]}>
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      </ComponentGuard>
    ),
  },
  {
    accessorKey: "employee",
    header: "Name",
    cell: ({ row }) => (
      <p>
        {row.original.employee?.first_name} {row.original.employee?.last_name}
      </p>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "clock_in",
    header: "Clock In",
    cell: ({ row }) => (
      <p>{new Date(row.original.clock_in).toLocaleString()}</p>
    ),
  },
  {
    accessorKey: "clock_out",
    header: "Clock Out",
    cell: ({ row }) => (
      <p>
        {row.original.clock_out
          ? new Date(row.original.clock_out).toLocaleString()
          : "No clock out"}
      </p>
    ),
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <div className="flex gap-2">
        <Link
          to={`/attendances/$attendanceId`}
          params={{ attendanceId: row.original.id }}
        >
          <Button variant="outline">
            <EyeIcon color="green" />
          </Button>
        </Link>
      </div>
    ),
  },
];

const Actions = ({
  table,
  approvalId,
}: {
  table: Table<Attendance>;
  approvalId: number;
}) => {
  const { mutate } = useApproval();

  const ids = table
    .getFilteredSelectedRowModel()
    .rows.map((row) => Number(row.original.id));

  const handleApprove = () => {
    mutate({
      approvedId: approvalId,
      ids,
      status: "APPROVED",
    });
    table.setRowSelection({});
  };

  const handleReject = () => {
    mutate({
      approvedId: approvalId,
      ids,
      status: "REJECTED",
    });
    table.setRowSelection({});
  };

  return (
    <ComponentGuard allowedRoles={[ROLE.HRD]}>
      <div className="flex items-center space-x-2">
        <Button
          key="approve"
          variant="outline"
          onClick={() => handleApprove()}
          className="text-green-500"
        >
          Approve
        </Button>
        <Button
          key="reject"
          variant="outline"
          onClick={() => handleReject()}
          className="text-red-500"
        >
          Reject
        </Button>
      </div>
    </ComponentGuard>
  );
};

export function AttendancesTable() {
  const { data: user } = useUser();

  const [rowSelection, setRowSelection] = useState({});

  const { table, isLoading, setPage, setPageSize, setSearchTerm } =
    useDataTable<Attendance>({
      columns,
      queryKey: "pending-attendances",
      rowSelection,
      setRowSelection,
      enabled: !!user,
      fetchData: async (params) => {
        const endpoint =
          user?.role.name === ROLE.HRD ? "/attendance" : "/attendance/me";

        const response = await api.get<DataTableResponse<Attendance>>(
          endpoint,
          {
            params: {
              page: params.page,
              limit: params.pageSize,
              status: "PENDING",
            },
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        return response.data;
      },
    });

  return (
    <DataTable<Attendance>
      table={table}
      isLoading={isLoading}
      columns={columns}
      onPageChange={setPage}
      onPageSizeChange={setPageSize}
      onSearch={setSearchTerm}
      actions={<Actions table={table} approvalId={user?.id} />}
    />
  );
}
