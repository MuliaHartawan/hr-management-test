import { useNavigate } from "@tanstack/react-router";
import { useAuth } from "@/app/_hooks/auth/use-auth";
import { useMutation } from "@tanstack/react-query";
import { api } from "@/libs/axios/axios";
import { useToast } from "@/app/_hooks/use-toast";
import { TCreateDepartmentValidation } from "../../-validations/create-department-validation";

export const useCreateDepartment = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { token } = useAuth();

  return useMutation({
    mutationFn: async (data: TCreateDepartmentValidation) => {
      const response = await api.post("/department", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
    onSuccess: () => {
      toast({
        title: "Department created successfully",
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
