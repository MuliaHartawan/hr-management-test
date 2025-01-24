import { useAuth } from "@/app/_hooks/auth/use-auth";
import { api } from "@/libs/axios/axios";
import { Payload } from "@/types/payload";
import { useQuery } from "@tanstack/react-query";
import { jwtDecode } from "jwt-decode";

export const useGetShift = () => {
  const { token } = useAuth();

  const decodedToken = token ? jwtDecode<Payload>(token) : null;

  return useQuery({
    queryKey: ["shift", decodedToken?.shift_id],
    queryFn: async () => {
      const response = await api.get(`/shift/${decodedToken?.shift_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data.data;
    },
    enabled: !!token && !!decodedToken?.shift_id,
  });
};
