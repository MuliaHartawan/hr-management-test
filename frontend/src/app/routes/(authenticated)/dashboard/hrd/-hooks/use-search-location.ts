import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useSearchLocation = (search: string) => {
  return useQuery({
    queryKey: ["location", search],
    queryFn: async () => {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search`,
        {
          params: {
            format: "json",
            q: search,
          },
        }
      );

      console.log("[RESPONSE] ", response.data);

      return response.data;
    },
    enabled: false,
  });
};
