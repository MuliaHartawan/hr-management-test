import { useAuth } from "@/app/_hooks/auth/use-auth";
import { api } from "@/libs/axios/axios";
import { useQuery } from "@tanstack/react-query";

export const useGetUsersOptions = () => {
  const { token } = useAuth();

  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await api.get("/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("[RESPONSE] ", response.data.data);

      return response.data.data;
    },
    enabled: !!token,
  });
};
