import { DataTable } from "@/app/_components/ui/datatable/datatable";
import { useDataTable } from "@/app/_hooks/datatables/use-datatable";
import { Position } from "@/common/types/position";
import { api } from "@/libs/axios/axios";
import { DataTableResponse } from "@/types/table";
import { ColumnDef } from "@tanstack/react-table";

type Props = {
  columns: ColumnDef<Position>[];
};

export function PositionsDataTable({ columns }: Props) {
  const { table, isLoading, setPage, setPageSize, setSearchTerm } =
    useDataTable<Position>({
      columns,
      queryKey: "positions",
      fetchData: async () => {
        const response = await api.get<DataTableResponse<Position>>(
          "/position",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        return response.data;
      },
    });

  return (
    <DataTable<Position>
      table={table}
      isLoading={isLoading}
      columns={columns}
      onPageChange={setPage}
      onPageSizeChange={setPageSize}
      onSearch={setSearchTerm}
    />
  );
}
