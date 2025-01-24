import { useRef, useState } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import { Input } from "@/app/_components/ui/input";
import { Button } from "@/app/_components/ui/button";

export const MapSearchControl = ({
  currentLocation,
}: {
  currentLocation: [number, number];
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const map = useMap();
  const [isLoading, setIsLoading] = useState(false);
  const markerRef = useRef<L.Marker | null>(null);

  const handleSearch = async () => {
    if (!searchQuery) return;

    setIsLoading(true);

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery)}`
      );
      const data = await response.json();

      if (data && data.length > 0) {
        const result = data[0];
        const latlng = L.latLng(parseFloat(result.lat), parseFloat(result.lon));

        if (markerRef.current) {
          map.removeLayer(markerRef.current);
        }

        const marker = L.marker(latlng).addTo(map);
        markerRef.current = marker;

        map.setView(latlng, 13);
      } else {
        alert("Location not found");
      }
    } catch (error) {
      console.error("Search error:", error);
      alert("Error searching for location");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="absolute md:right-0 z-[1000] flex flex-wrap max-lg:w-full max-lg:bottom-0 gap-3 p-2 bg-white rounded-bl-md">
      <Input
        type="text"
        placeholder="Search location"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="max-md:w-full w-64"
      />
      <div className="flex flex-wrap gap-3">
        <Button onClick={handleSearch} disabled={isLoading}>
          {isLoading ? "Searching..." : "Search"}
        </Button>
        <Button onClick={() => map.setView(currentLocation, 13)}>
          Back to my location
        </Button>
      </div>
    </div>
  );
};
