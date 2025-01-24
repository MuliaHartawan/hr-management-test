import { useToast } from "@/app/_hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { api } from "@/libs/axios/axios";
import { useNavigate } from "@tanstack/react-router";
import { useAuth } from "@/app/_hooks/auth/use-auth";
import { TUpdateEmployeeValidation } from "../../../-validations/update-employee-validation";

export const useUpdateEmployee = () => {
  const { toast } = useToast();
  const { token } = useAuth();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async ({
      id,
      data,
    }: {
      id: number;
      data: TUpdateEmployeeValidation;
    }) => {
      const response = await api.put(`/employee/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
    onSuccess: () => {
      toast({
        title: "Employee updated successfully",
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
