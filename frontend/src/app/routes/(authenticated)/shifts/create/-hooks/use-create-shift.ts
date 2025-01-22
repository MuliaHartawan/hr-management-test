import { useNavigate } from "@tanstack/react-router";
import { useAuth } from "@/app/_hooks/auth/use-auth";
import { useMutation } from "@tanstack/react-query";
import { api } from "@/libs/axios/axios";
import { useToast } from "@/app/_hooks/use-toast";
import { TCreateShiftValidation } from "../../-validations/create-shift-validation";

export const useCreateShift = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { token } = useAuth();

  return useMutation({
    mutationFn: async (data: TCreateShiftValidation) => {
      const response = await api.post("/shift", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
    onSuccess: () => {
      toast({
        title: "Shift created successfully",
      });

      setTimeout(() => {
        navigate({ to: "/shifts" });
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
