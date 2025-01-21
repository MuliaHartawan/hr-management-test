import { useAuth } from "@/app/_hooks/auth/use-auth";
import { api } from "@/libs/axios/axios";
import { useQuery } from "@tanstack/react-query";

export const useGetDepartment = (id: number) => {
  const { token } = useAuth();

  return useQuery({
    queryKey: ["department", id],
    queryFn: async () => {
      const response = await api.get(`/department/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data.data;
    },
    enabled: !!id,
  });
};
