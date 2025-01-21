import {
  DataTableResponse,
  DataTableState,
  UseDataTableProps,
} from "@/types/table";
import { useQuery } from "@tanstack/react-query";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";

export function useDataTable<TData extends Record<string, unknown>>({
  columns,
  queryKey,
  fetchData,
}: UseDataTableProps<TData>) {
  const [state, setState] = useState<DataTableState>({
    page: 1,
    pageSize: 10,
    searchTerm: "",
    filters: {},
  });

  const { data, isLoading } = useQuery<DataTableResponse<TData>>({
    queryKey: [queryKey, state],
    queryFn: () => fetchData(state),
  });

  const table = useReactTable<TData>({
    data: data?.data ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    pageCount: Math.ceil((data?.total ?? 0) / state.pageSize),
    state: {
      pagination: {
        pageIndex: state.page - 1,
        pageSize: state.pageSize,
      },
    },
  });

  const setPage = (page: number) => {
    setState((prev) => ({ ...prev, page }));
  };

  const setPageSize = (pageSize: number) => {
    setState((prev) => ({ ...prev, pageSize, page: 1 }));
  };

  const setSearchTerm = (searchTerm: string) => {
    setState((prev) => ({ ...prev, searchTerm, page: 1 }));
  };

  const setFilter = (key: string, value: unknown) => {
    setState((prev) => ({
      ...prev,
      filters: { ...prev.filters, [key]: value },
      page: 1,
    }));
  };

  return {
    table,
    state,
    isLoading,
    setPage,
    setPageSize,
    setSearchTerm,
    setFilter,
    totalRows: data?.total ?? 0,
  };
}
