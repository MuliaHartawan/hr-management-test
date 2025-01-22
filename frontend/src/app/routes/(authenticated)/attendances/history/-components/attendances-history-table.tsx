import { Button } from "@/app/_components/ui/button";
import { DataTable } from "@/app/_components/ui/datatable/datatable";
import { useDataTable } from "@/app/_hooks/datatables/use-datatable";
import { Attendance } from "@/common/types/attendance";
import { api } from "@/libs/axios/axios";
import { DataTableResponse } from "@/types/table";
import { Link } from "@tanstack/react-router";
import { ColumnDef } from "@tanstack/react-table";
import { EyeIcon } from "lucide-react";

const columns: ColumnDef<Attendance>[] = [
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
        {/* {row.original.clock_out ?  convert to date string */}
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

export function AttendancesTable() {
  const { table, isLoading, setPage, setPageSize, setSearchTerm } =
    useDataTable<Attendance>({
      columns,
      queryKey: "attendances",
      fetchData: async (params) => {
        const response = await api.get<DataTableResponse<Attendance>>(
          "/attendance",
          {
            params: {
              page: params.page,
              limit: params.pageSize,
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
    />
  );
}
