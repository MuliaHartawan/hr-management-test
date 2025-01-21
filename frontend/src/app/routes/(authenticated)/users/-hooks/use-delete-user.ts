import { useToast } from "@/app/_hooks/use-toast";
import { api } from "@/libs/axios/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteUser = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number) => {
      const response = await api.delete(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return response.data;
    },
    onSuccess: () => {
      toast({
        title: "User deleted successfully",
        description: "You can now close the page",
      });

      queryClient.invalidateQueries({
        queryKey: ["users"],
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
