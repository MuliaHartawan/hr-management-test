import { useToast } from "@/app/_hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { TUpdateUserValidation } from "../../../-validations/update-user-validation";
import { api } from "@/libs/axios/axios";
import { useNavigate } from "@tanstack/react-router";
import { useAuth } from "@/app/_hooks/auth/use-auth";

export const useUpdateUser = () => {
  const { toast } = useToast();
  const { token } = useAuth();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async ({
      id,
      data,
    }: {
      id: number;
      data: TUpdateUserValidation;
    }) => {
      const response = await api.put(`/users/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
    onSuccess: () => {
      toast({
        title: "User updated successfully",
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
