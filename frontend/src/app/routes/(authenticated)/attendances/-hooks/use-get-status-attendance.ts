import { useAuth } from "@/app/_hooks/auth/use-auth";
import { api } from "@/libs/axios/axios";
import { useQuery } from "@tanstack/react-query";

export const useGetStatusAttendance = () => {
  const { token } = useAuth();

  return useQuery({
    queryKey: ["status-attendance"],
    queryFn: async () => {
      const response = await api.get(`/attendance/status`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.data;
    },
    enabled: !!token,
  });
};
