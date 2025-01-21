import { useAuth } from "@/app/_hooks/auth/use-auth";
import { api } from "@/libs/axios/axios";
import { useQuery } from "@tanstack/react-query";

export const useGetUser = (id: number) => {
  const { token } = useAuth();

  return useQuery({
    queryKey: ["user", id],
    queryFn: async () => {
      const response = await api.get(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data.data;
    },
    enabled: !!id,
  });
};
