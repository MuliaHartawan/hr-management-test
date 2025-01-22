import { useQuery} from "@tanstack/react-query";
import { api } from "@/libs/axios/axios";
import { useAuth } from "@/app/_hooks/auth/use-auth";

// Define the type for the parameters of the mutation
interface ExportParams {
  employeeIds: number[];
  startDate?: string;
  endDate?: string;
  status?: string;
  page?: number;
  limit?: number;
}

export const useExport = ({
  employeeIds,
  startDate,
  endDate,
  status,
  page,
  limit,
}: ExportParams) => {
  const { token } = useAuth();

  return useQuery({
    queryKey: ["export-attendance", employeeIds, startDate, endDate, status, page, limit],
    queryFn: async () => {
      // Prepare params, excluding undefined values
      const params: ExportParams = { 
        employeeIds: employeeIds,
        ...(startDate && { startDate }),
        ...(endDate && { endDate }),
        ...(status && { status }),
        ...(page && { page }),
        ...(limit && { limit }),
      };

      const response = await api.get("/report", {
        responseType: "blob",
        params,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    },
    enabled: !!employeeIds,
  });
};
