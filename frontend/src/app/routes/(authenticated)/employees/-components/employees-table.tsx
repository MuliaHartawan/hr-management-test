import { DataTable } from "@/app/_components/ui/datatable/datatable";
import { useDataTable } from "@/app/_hooks/datatables/use-datatable";
import { Employee } from "@/common/types/employee";
import { api } from "@/libs/axios/axios";
import { DataTableResponse } from "@/types/table";
import { ColumnDef } from "@tanstack/react-table";

type Props = {
  columns: ColumnDef<Employee>[];
};

export function EmployeeDataTable({ columns }: Props) {
  const { table, isLoading, setPage, setPageSize, setSearchTerm } =
    useDataTable<Employee>({
      columns,
      queryKey: "employees",
      fetchData: async () => {
        const response = await api.get<DataTableResponse<Employee>>(
          "/employee",
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
    <DataTable<Employee>
      table={table}
      isLoading={isLoading}
      columns={columns}
      onPageChange={setPage}
      onPageSizeChange={setPageSize}
      onSearch={setSearchTerm}
    />
  );
}
