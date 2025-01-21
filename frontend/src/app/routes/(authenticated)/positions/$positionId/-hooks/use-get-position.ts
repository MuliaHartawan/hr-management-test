import { useAuth } from "@/app/_hooks/auth/use-auth";
import { api } from "@/libs/axios/axios";
import { useQuery } from "@tanstack/react-query";

export const useGetPosition = (id: number) => {
  const { token } = useAuth();

  return useQuery({
    queryKey: ["position", id],
    queryFn: async () => {
      const response = await api.get(`/position/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data.data;
    },
    enabled: !!id,
  });
};
