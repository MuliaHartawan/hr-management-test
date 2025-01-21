import { useAuth } from "@/app/_hooks/auth/use-auth";
import { useToast } from "@/app/_hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { TUpdatePositionValidation } from "../../../-validations/update-position-validation";
import { api } from "@/libs/axios/axios";

export const useUpdatePosition = () => {
  const { toast } = useToast();
  const { token } = useAuth();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async ({
      id,
      data,
    }: {
      id: number;
      data: TUpdatePositionValidation;
    }) => {
      const response = await api.put(`/position/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
    onSuccess: () => {
      toast({
        title: "Position updated successfully",
      });

      setTimeout(() => {
        navigate({ to: "/positions" });
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
