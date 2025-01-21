import { useToast } from "@/app/_hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { api } from "@/libs/axios/axios";
import { useNavigate } from "@tanstack/react-router";
import { useAuth } from "@/app/_hooks/auth/use-auth";
import { TUpdateDepartmentValidation } from "../../../-validations/update-department-validation";

export const useUpdateDepartment = () => {
  const { toast } = useToast();
  const { token } = useAuth();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async ({
      id,
      data,
    }: {
      id: number;
      data: TUpdateDepartmentValidation;
    }) => {
      const response = await api.put(`/department/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
    onSuccess: () => {
      toast({
        title: "Department updated successfully",
      });

      setTimeout(() => {
        navigate({ to: "/departments" });
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
