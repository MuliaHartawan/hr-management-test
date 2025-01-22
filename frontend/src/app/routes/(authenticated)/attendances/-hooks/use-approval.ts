import { useToast } from "@/app/_hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/libs/axios/axios";
import { useAuth } from "@/app/_hooks/auth/use-auth";

export const useApproval = () => {
  const { toast } = useToast();
  const { token } = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      approvedId,
      ids,
    status,
    }: {
      approvedId: number;
      ids: number[];
    status: string;
    }) => {
      const response = await api.put(`/attendance/approval`, {
        "verified_by": approvedId,
        "attendance_ids": ids,
        "status": status,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
    onSuccess: () => {
      toast({
        title: "Attendance updated successfully",
      });

      queryClient.invalidateQueries({
        queryKey: ["pending-attendances"],
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Something went wrong",
      });
    },
  });
};
