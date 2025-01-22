import { useAuth } from "@/app/_hooks/auth/use-auth";
import { api } from "@/libs/axios/axios";
import { useQuery } from "@tanstack/react-query";

export const useGetAttendance = (id: number) => {
  const { token } = useAuth();

  return useQuery({
    queryKey: ["attendance", id],
    queryFn: async () => {
      const response = await api.get(`/attendance/detail/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data.data;
    },
    enabled: !!id,
  });
};
