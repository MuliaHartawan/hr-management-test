import { useAuth } from "@/app/_hooks/auth/use-auth";
import { api } from "@/libs/axios/axios";
import { useMutation } from "@tanstack/react-query";
import { CheckinPresenceValidations } from "../-validations/checkin-presence-validations";
import { useToast } from "@/app/_hooks/use-toast";
import { useNavigate } from "@tanstack/react-router";
import { jwtDecode } from "jwt-decode";
import { Payload } from "@/types/payload";
import { convertToBlob } from "../-utils/convert-to-blob";
import { AxiosError } from "axios";

export const useSubmitPresence = () => {
  const { token } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (data: CheckinPresenceValidations) => {
      const decodedToken = jwtDecode<Payload>(token!);
      const { clock_in_photo, clock_in_location } = data;

      const formData = new FormData();
      formData.append("employee_id", JSON.stringify(decodedToken.employee_id));
      formData.append(
        "clock_in_photo",
        convertToBlob(clock_in_photo),
        `${new Date().toISOString()}.jpg`
      );
      formData.append("clock_in_location", JSON.stringify(clock_in_location));

      const response = await api.post("/attendance", formData, {
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
