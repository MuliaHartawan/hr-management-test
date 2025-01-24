import { ComponentGuard } from "@/app/_components/layouts/guard/component-guard";
import { Button } from "@/app/_components/ui/button";
import { Checkbox } from "@/app/_components/ui/checkbox";
import { DataTable } from "@/app/_components/ui/datatable/datatable";
import { useDataTable } from "@/app/_hooks/datatables/use-datatable";
import { ROLE } from "@/common/enums/role-enum";
import { Employee } from "@/common/types/employee";
import { api } from "@/libs/axios/axios";
import { DataTableResponse } from "@/types/table";
import { Link } from "@tanstack/react-router";
import { ColumnDef, Table } from "@tanstack/react-table";
import { EyeIcon } from "lucide-react";
import { useExport } from "../-hooks/use-export";
import { useState } from "react";

const columns: ColumnDef<Employee>[] = [
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
        {row.original?.first_name} {row.original?.last_name}
      </p>
    ),
  },
  {
    accessorKey: "department",
    header: "Department",
    cell: ({ row }) => <p>{row.original.department.name}</p>,
  },
  {
    accessorKey: "position.name",
    header: "Position",
    cell: ({ row }) => <p>{row.original.position.name}</p>,
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <div className="flex gap-2">
        <Link
          to={`/attendances/history/$employeeId`}
          params={{ employeeId: row.original.id }}
        >
          <Button variant="outline">
            <EyeIcon color="green" />
          </Button>
        </Link>
      </div>
    ),
  },
];

const Actions = ({ table }: { table: Table<Employee> }) => {
  const { data, isLoading } = useExport({
    employeeIds: table
      .getSelectedRowModel()
      .rows.map((row) => Number(row.original.id)),
    startDate: "2022-01-01",
    endDate: "2025-12-31",
    status: "approved",
    page: 1,
    limit: 100,
  });

  const handleExport = () => {
    if (data) {
      const url = URL.createObjectURL(data);
      const link = document.createElement("a");
      link.href = url;
      link.download = `attendance-report-${new Date().toISOString()}.xlsx`;
      link.click();
      URL.revokeObjectURL(url);
    }
    table.setRowSelection({});
  };

  return (
    <ComponentGuard allowedRoles={[ROLE.HRD]}>
      <div className="flex items-center space-x-2">
        <Button
          key="export"
          onClick={handleExport}
          disabled={isLoading || table.getSelectedRowModel().rows.length === 0}
        >
          Export Selected
        </Button>
      </div>
    </ComponentGuard>
  );
};

export function AttendancesTable() {
  const [rowSelection, setRowSelection] = useState({});
  const { table, isLoading, setPage, setPageSize, setSearchTerm } =
    useDataTable<Employee>({
      columns,
      queryKey: "employee",
      rowSelection,
      setRowSelection,
      fetchData: async (params) => {
        const response = await api.get<DataTableResponse<Employee>>(
          "/employee",
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
    <DataTable<Employee>
      table={table}
      isLoading={isLoading}
      columns={columns}
      onPageChange={setPage}
      onPageSizeChange={setPageSize}
      onSearch={setSearchTerm}
      actions={<Actions table={table} />}
    />
  );
}
