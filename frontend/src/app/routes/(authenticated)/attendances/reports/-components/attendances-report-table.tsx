import { DataTable } from "@/app/_components/ui/datatable/datatable";
import { useDataTable } from "@/app/_hooks/datatables/use-datatable";
import { Attendance } from "@/common/types/attendance";
import { api } from "@/libs/axios/axios";
import { DataTableResponse } from "@/types/table";
import { ColumnDef } from "@tanstack/react-table";

const columns: ColumnDef<Attendance>[] = [
  {
    accessorKey: "employee",
    header: "Name",
    cell: ({ row }) => (
      <p>
        {row.original.employee.first_name} {row.original.employee.last_name}
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
  },
  {
    accessorKey: "clock_out",
    header: "Clock Out",
  },
];

export function AttendancesReportTable() {
  const { table, isLoading, setPage, setPageSize, setSearchTerm } =
    useDataTable<Attendance>({
      columns,
      queryKey: "attendances",
      fetchData: async (params) => {
        const response = await api.get<DataTableResponse<Attendance>>(
          "/report",
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
