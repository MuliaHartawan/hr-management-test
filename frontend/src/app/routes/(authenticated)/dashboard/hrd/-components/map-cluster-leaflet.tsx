import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import "leaflet/dist/leaflet.css";
import { createCustomClusterIcon } from "./cluster-icon";
import { TDashboardDataMapped } from "../../-types/dashboard-data-type";
import { generatePhotoMarker } from "../-utils/generate-photo-marker";
import { formatDate } from "@/utils/format-date";
import { Card, CardContent } from "@/app/_components/ui/card";
import { MapSearchControl } from "./search-map-control";

export const MapComponentLeaflet = ({
  data,
}: {
  data: TDashboardDataMapped;
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [currentLocation, setCurrentLocation] = useState<
    [number, number] | null
  >(null);

  useEffect(() => {
    setIsMounted(true);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation([
            position.coords.latitude,
            position.coords.longitude,
          ]);
        },
        (error) => {
          console.error("Error fetching location:", error);
        }
      );
    } else {
      console.warn("Geolocation is not supported by this browser.");
    }
  }, []);

  if (!isMounted || !currentLocation) {
    return <div className="flex flex-col items-center">Loading...</div>;
  }

  return (
    <Card className="map-page">
      <CardContent style={{ height: "500px" }}>
        <MapContainer
          center={currentLocation}
          zoom={13}
          style={{ width: "100%", height: "100%", zIndex: 0 }}
          className="rounded-lg shadow"
        >
          <MapSearchControl currentLocation={currentLocation} />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={currentLocation}>
            <Tooltip permanent direction="top" offset={[-15, -15]}>
              You are here
            </Tooltip>
          </Marker>
          <MarkerClusterGroup
            chunkedLoading
            iconCreateFunction={createCustomClusterIcon}
          >
            {data.attendanceMarker.map((item, index) => (
              <React.Fragment key={`marker-${index}`}>
                {item.clock_in_location && (
                  <Marker
                    key={`clock-in-${index}`}
                    position={item.clock_in_location}
                    icon={generatePhotoMarker({
                      photoUrl: `${import.meta.env.VITE_BASE_URL}/api/v1/uploads/${item.clock_in_photo}`,
                      type: "clockIn",
                    })}
                  >
                    <Popup>
                      <p className="font-bold">
                        Employee Name : {item.employee.first_name}{" "}
                        {item.employee.last_name}
                      </p>
                      <p>Department : {item.employee.department.name}</p>
                      <p>Position : {item.employee.position.name}</p>
                      <p>Type : Check In</p>
                      <p>Clock In At : {formatDate(item.clock_in)}</p>
                    </Popup>
                  </Marker>
                )}
                {item.clock_out_location && (
                  <Marker
                    key={`clock-out-${index}`}
                    position={item.clock_out_location}
                    icon={generatePhotoMarker({
                      photoUrl: `${import.meta.env.VITE_BASE_URL}/api/v1/uploads/${item.clock_out_photo}`,
                      type: "clockOut",
                    })}
                  >
                    <Popup>
                      <p className="font-bold">
                        Employee Name : {item.employee.first_name}{" "}
                        {item.employee.last_name}
                      </p>
                      <p>Department : {item.employee.department.name}</p>
                      <p>Position : {item.employee.position.name}</p>
                      <p>Type : Check Out</p>
                      <p>Clock Out At : {formatDate(item.clock_out)}</p>
                    </Popup>
                  </Marker>
                )}
              </React.Fragment>
            ))}
          </MarkerClusterGroup>
        </MapContainer>
      </CardContent>
    </Card>
  );
};
