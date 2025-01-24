import { useAuth } from "@/app/_hooks/auth/use-auth";
import { api } from "@/libs/axios/axios";
import { useQuery } from "@tanstack/react-query";

export const useGetShiftsOptions = () => {
  const { token } = useAuth();

  return useQuery({
    queryKey: ["shifts"],
    queryFn: async () => {
      const response = await api.get("/shift", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data.data;
    },
    enabled: !!token,
  });
};
