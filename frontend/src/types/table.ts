import { ColumnDef, Table as TanStackTable } from "@tanstack/react-table";

export interface DataTableState {
  page: number;
  pageSize: number;
  searchTerm: string;
  filters: Record<string, unknown>;
}

export interface DataTableResponse<TData> {
  data: TData[];
  total: number;
}

export interface UseDataTableProps<TData> {
  columns: ColumnDef<TData>[];
  queryKey: string;
  fetchData: (params: DataTableState) => Promise<DataTableResponse<TData>>;
}

export interface DataTableProps<TData> {
  table: TanStackTable<TData>;
  isLoading: boolean;
  columns: ColumnDef<TData>[];
  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: number) => void;
  onSearch: (term: string) => void;
}
