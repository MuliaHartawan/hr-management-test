import { useAuth } from "@/app/_hooks/auth/use-auth";
import { useMutation } from "@tanstack/react-query";
import { TLoginSchema } from "../-validations/login-schema";
import { api } from "@/libs/axios/axios";
import { useNavigate } from "@tanstack/react-router";

export const useLogin = () => {
  const navigate = useNavigate();
  const { setToken, setIsLoggedIn } = useAuth();

  return useMutation({
    mutationFn: async (data: TLoginSchema) => {
      const response = await api.post("/auth/login", data);
      return response.data;
    },
    onSuccess: async (data) => {
      const token = data.access_token;

      setIsLoggedIn(true);
      setToken(token);

      localStorage.setItem("token", token);

      setTimeout(() => {
        navigate({ to: "/dashboard" });
      }, 0);
    },
  });
};
