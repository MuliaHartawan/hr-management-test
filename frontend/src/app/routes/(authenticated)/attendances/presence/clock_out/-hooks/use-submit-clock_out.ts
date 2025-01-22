import { useAuth } from "@/app/_hooks/auth/use-auth";
import { api } from "@/libs/axios/axios";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/app/_hooks/use-toast";
import { useNavigate } from "@tanstack/react-router";
import { jwtDecode } from "jwt-decode";
import { Payload } from "@/types/payload";
import { AxiosError } from "axios";
import { checkoutPresenceValidations } from "../../clock_in/-validations/checkout-presence-validation";
import { convertToBlob } from "../../clock_in/-utils/convert-to-blob";

export const useSubmitClockOut = () => {
  const { token } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (data: checkoutPresenceValidations) => {
      const decodedToken = jwtDecode<Payload>(token!);
      const { photo, location, notes } = data;

      const formData = new FormData();
      formData.append("employee_id", JSON.stringify(decodedToken.employee_id));
      formData.append(
        "clock_out_photo",
        convertToBlob(photo),
        `${new Date().toISOString()}.png`
      );
      formData.append("clock_out_location", JSON.stringify(location));
      formData.append("notes", notes);

      const response = await api.put("/attendance", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data;
    },
    onSuccess: () => {
      toast({
        title: "Presence submitted successfully",
      });

      setTimeout(() => {
        navigate({ to: "/attendances" });
      }, 0);
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        toast({
          title: "Error",
          description: error.response?.data?.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "Something went wrong",
        });
      }
    },
  });
};
