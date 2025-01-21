import { useQuery } from "@tanstack/react-query";
import { Payload } from "@/types/payload";
import { jwtDecode } from "jwt-decode";
import { api } from "@/libs/axios/axios";

export const useUser = () => {
  const token = localStorage.getItem("token");

  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      if (!token) throw new Error("No token provided");

      try {
        const decodedToken = jwtDecode<Payload>(token);
        const userId = decodedToken.user_id;

        const response = await api.get(`/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        return response.data.data;
      } catch {
        throw new Error("Failed to fetch user data");
      }
    },
  });
};
