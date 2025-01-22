import { DataTable } from "@/app/_components/ui/datatable/datatable";
import { useAuth } from "@/app/_hooks/auth/use-auth";
import { useDataTable } from "@/app/_hooks/datatables/use-datatable";
import { Shift } from "@/common/types/shift";
import { api } from "@/libs/axios/axios";
import { DataTableResponse } from "@/types/table";
import { ColumnDef } from "@tanstack/react-table";

type Props = {
  columns: ColumnDef<Shift>[];
};

export function ShiftsDataTable({ columns }: Props) {
  const { token } = useAuth();
  const { table, isLoading, setPage, setPageSize, setSearchTerm } =
    useDataTable<Shift>({
      columns,
      queryKey: "shifts",
      fetchData: async () => {
        const response = await api.get<DataTableResponse<Shift>>("/shift", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

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
