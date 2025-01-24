import { useNavigate } from "@tanstack/react-router";
import { useAuth } from "@/app/_hooks/auth/use-auth";
import { useMutation } from "@tanstack/react-query";
import { api } from "@/libs/axios/axios";
import { useToast } from "@/app/_hooks/use-toast";
import { TCreateEmployeeValidation } from "../-validations/create-employee-validation";

export const useCreateEmployee = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { token } = useAuth();

  return useMutation({
    mutationFn: async (data: TCreateEmployeeValidation) => {
      const response = await api.post("/employee", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
    onSuccess: () => {
      toast({
        title: "Employee created successfully",
      });

      setTimeout(() => {
        navigate({ to: "/employees" });
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
