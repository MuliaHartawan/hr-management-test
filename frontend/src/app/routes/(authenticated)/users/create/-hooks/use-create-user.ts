import { useNavigate } from "@tanstack/react-router";
import { TCreateUserValidation } from "../../-validations/create-user-validation";
import { useAuth } from "@/app/_hooks/auth/use-auth";
import { useMutation } from "@tanstack/react-query";
import { api } from "@/libs/axios/axios";
import { useToast } from "@/app/_hooks/use-toast";

export const useCreateUser = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { token } = useAuth();

  return useMutation({
    mutationFn: async (data: TCreateUserValidation) => {
      const response = await api.post("/users", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
    onSuccess: () => {
      toast({
        title: "User created successfully",
        description: "You can now close the page",
      });

      setTimeout(() => {
        navigate({ to: "/users" });
      }, 0);
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Something went wrong",
      });
    },
  });
};
