import { useAuth } from "@/app/_hooks/auth/use-auth";
import { api } from "@/libs/axios/axios";
import { useQuery } from "@tanstack/react-query";
import { dataMapper } from "../../-utils/data-mapper";

export const useGetDashboardData = () => {
  const { token } = useAuth();

  return useQuery({
    queryKey: ["get-dashboard-data"],
    queryFn: async () => {
      const response = await api.get("/dashboard", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return dataMapper({ data: response.data.data });
    },
    enabled: !!token,
  });
};
