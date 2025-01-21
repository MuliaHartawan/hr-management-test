import { DataTable } from "@/app/_components/ui/datatable/datatable";
import { useDataTable } from "@/app/_hooks/datatables/use-datatable";
import { Department } from "@/common/types/department";
import { api } from "@/libs/axios/axios";
import { DataTableResponse } from "@/types/table";
import { ColumnDef } from "@tanstack/react-table";

type Props = {
  columns: ColumnDef<Department>[];
};

export function DepartmentsDataTable({ columns }: Props) {
  const { table, isLoading, setPage, setPageSize, setSearchTerm } =
    useDataTable<Department>({
      columns,
      queryKey: "departments",
      fetchData: async () => {
        const response = await api.get<DataTableResponse<Department>>(
          "/department",
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
    <DataTable<Department>
      table={table}
      isLoading={isLoading}
      columns={columns}
      onPageChange={setPage}
      onPageSizeChange={setPageSize}
      onSearch={setSearchTerm}
    />
  );
}
