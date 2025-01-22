import { ColumnDef, RowSelectionState, Table as TanStackTable } from "@tanstack/react-table";

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
  enabled?: boolean;
  rowSelection?: RowSelectionState;
  setRowSelection?: React.Dispatch<React.SetStateAction<RowSelectionState>>;
  fetchData: (params: DataTableState) => Promise<DataTableResponse<TData>>;
}

export interface DataTableProps<TData> {
  table: TanStackTable<TData>;
  isLoading: boolean;
  columns: ColumnDef<TData>[];
  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: number) => void;
  onSearch: (term: string) => void;
  onRowSelectionChange?: (selectedRows: Record<string, unknown>) => void;
  actions?: React.ReactNode;
}
