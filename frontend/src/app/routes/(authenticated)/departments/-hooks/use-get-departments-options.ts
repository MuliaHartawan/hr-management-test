import { useAuth } from "@/app/_hooks/auth/use-auth";
import { api } from "@/libs/axios/axios";
import { useQuery } from "@tanstack/react-query";

export const useGetDepartmentsOptions = () => {
  const { token } = useAuth();

  return useQuery({
    queryKey: ["departments"],
    queryFn: async () => {
      const response = await api.get("/department", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data.data;
    },
    enabled: !!token,
  });
};
