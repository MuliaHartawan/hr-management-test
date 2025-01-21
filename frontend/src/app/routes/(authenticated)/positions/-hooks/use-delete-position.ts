import { useAuth } from "@/app/_hooks/auth/use-auth";
import { useToast } from "@/app/_hooks/use-toast";
import { api } from "@/libs/axios/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeletePosition = () => {
  const { toast } = useToast();
  const { token } = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number) => {
      const response = await api.delete(`/position/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
    onSuccess: () => {
      toast({
        title: "Position deleted successfully",
      });

      queryClient.invalidateQueries({
        queryKey: ["positions"],
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
