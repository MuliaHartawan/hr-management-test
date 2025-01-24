import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface LocationQueryParams {
  lat: number | undefined;
  lon: number | undefined;
}

export const useGetDetailLocation = ({ lat, lon }: LocationQueryParams) => {
  return useQuery({
    queryKey: ["get-detail-location", lat, lon],
    queryFn: async () => {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
      );

      return response.data;
    },
    enabled: !!lat && !!lon,
  });
};