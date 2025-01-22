import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Camera, CameraType } from "react-camera-pro";
import { useGetDetailLocation } from "../clock_in/-hooks/use-get-detail-location";
import { useSubmitClockOut } from "./-hooks/use-submit-clock_out";
import { PageGuard } from "@/app/_components/layouts/guard/page-guard";
import { ROLE } from "@/common/enums/role-enum";
import Page from "@/app/_components/layouts/page/main";
import { Button } from "@/app/_components/ui/button";
import { handleTakePhoto } from "../clock_in/-utils/handle-take-photo";

export const Route = createFileRoute(
  "/(authenticated)/attendances/presence/clock_out/"
)({
  component: RouteComponent,
});

export type Location = {
  latitude: number;
  longitude: number;
};

interface LocationDetails {
  district?: string;
}

function RouteComponent() {
  useEffect(() => {
    document.title = "Clock Out";
  }, []);

  const cameraRef = useRef<CameraType | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [photo, setPhoto] = useState<string | null>(null);
  const [location, setLocation] = useState<Location | null>(null);
  const [locationDetails, setLocationDetails] = useState<LocationDetails>({});

  const { data, isLoading } = useGetDetailLocation({
    lat: location?.latitude,
    lon: location?.longitude,
  });

  const { mutate, isPending } = useSubmitClockOut();

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });

        setLocationDetails({
          district: data?.display_name,
        });
      });
    }
  }, [data]);

  const handleSubmit = () => {
    const formattedLocation = `https://www.google.com/maps?q=${location?.latitude},${location?.longitude}`;

    mutate({
      photo: photo!,
      location: formattedLocation,
      notes: "Notes",
    });
  };

  return (
    <PageGuard allowedRoles={[ROLE.STAFF]}>
      <Page isLoading={isLoading}>
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-bold">Take Photo</h1>

          {!photo ? (
            <div className="flex flex-col items-center w-full">
              <div className="w-full max-w-64 h-64 relative rounded-md overflow-hidden">
                <Camera
                  ref={cameraRef}
                  errorMessages={{
                    noCameraAccessible:
                      "No camera found. Please connect a camera.",
                    permissionDenied: "Permission to access camera was denied.",
                    switchCamera:
                      "It is not possible to switch camera to different one because there is only one video device accessible.",
                    canvas: "Canvas is not supported.",
                  }}
                  facingMode="environment"
                />
                <canvas ref={canvasRef} className="hidden" />
              </div>
              <Button
                onClick={() =>
                  handleTakePhoto({
                    location,
                    district: locationDetails.district,
                    canvasRef,
                    cameraRef,
                    setPhoto,
                  })
                }
                className="mt-4 border z-50"
              >
                Take Photo
              </Button>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <img
                src={photo}
                alt="Taken photo with watermark"
                className="w-64 h-64 object-cover rounded-md border"
              />
              <Button
                className="mt-4 bg-green-500 text-white"
                onClick={handleSubmit}
                disabled={isPending}
              >
                Confirm Presence
              </Button>
              <Button
                onClick={() => setPhoto(null)}
                className="mt-2 bg-gray-500 text-white"
              >
                Retake Photo
              </Button>
            </div>
          )}
        </div>
      </Page>
    </PageGuard>
  );
}
