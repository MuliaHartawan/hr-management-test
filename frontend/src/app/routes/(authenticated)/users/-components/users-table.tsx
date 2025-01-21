import { DataTable } from "@/app/_components/ui/datatable/datatable";
import { useDataTable } from "@/app/_hooks/datatables/use-datatable";
import { User } from "@/common/types/user";
import { api } from "@/libs/axios/axios";
import { DataTableResponse } from "@/types/table";
import { ColumnDef } from "@tanstack/react-table";

type Props = {
  columns: ColumnDef<User>[];
};

export function UsersDataTable({ columns }: Props) {
  const { table, isLoading, setPage, setPageSize, setSearchTerm } =
    useDataTable<User>({
      columns,
      queryKey: "users",
      fetchData: async () => {
        const response = await api.get<DataTableResponse<User>>("/users", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        return response.data;
      },
    });

  return (
    <DataTable<User>
      table={table}
      isLoading={isLoading}
      columns={columns}
      onPageChange={setPage}
      onPageSizeChange={setPageSize}
      onSearch={setSearchTerm}
    />
  );
}
