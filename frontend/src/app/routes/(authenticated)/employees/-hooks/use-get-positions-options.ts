import { useAuth } from "@/app/_hooks/auth/use-auth";
import { api } from "@/libs/axios/axios";
import { useQuery } from "@tanstack/react-query";

export const useGetPositionsOptions = () => {
  const { token } = useAuth();

  return useQuery({
    queryKey: ["positions"],
    queryFn: async () => {
      const response = await api.get("/position", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data.data;
    },
    enabled: !!token,
  });
};
