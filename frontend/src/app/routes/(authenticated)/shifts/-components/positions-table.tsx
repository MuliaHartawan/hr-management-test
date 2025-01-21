import { DataTable } from "@/app/_components/ui/datatable/datatable";
import { useDataTable } from "@/app/_hooks/datatables/use-datatable";
import { Shift } from "@/common/types/shift";
import { api } from "@/libs/axios/axios";
import { DataTableResponse } from "@/types/table";
import { ColumnDef } from "@tanstack/react-table";

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
    accessorKey: "created_at",
    header: "Created At",
  },
];

export function ShiftsDataTable() {
  const { table, isLoading, setPage, setPageSize, setSearchTerm } =
    useDataTable<Shift>({
      columns,
      queryKey: "shifts",
      fetchData: async () => {
        const response = await api.get<DataTableResponse<Shift>>("/shift", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        console.log(response.data);

        return response.data;
      },
    });

  return (
    <DataTable<Shift>
      table={table}
      isLoading={isLoading}
      columns={columns}
      onPageChange={setPage}
      onPageSizeChange={setPageSize}
      onSearch={setSearchTerm}
    />
  );
}
