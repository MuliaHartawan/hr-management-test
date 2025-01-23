import { PageGuard } from "@/app/_components/layouts/guard/page-guard";
import Page from "@/app/_components/layouts/page/main";
import { Button } from "@/app/_components/ui/button";
import { ROLE } from "@/common/enums/role-enum";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Camera, CameraType } from "react-camera-pro";
import { useGetDetailLocation } from "./-hooks/use-get-detail-location";
import { handleTakePhoto } from "./-utils/handle-take-photo";
import { useSubmitPresence } from "./-hooks/use-submit-presence";
import Clock from "react-live-clock";
import { Badge } from "@/app/_components/ui/badge";

export type Location = {
  latitude: number;
  longitude: number;
};

interface LocationDetails {
  district?: string;
}

export const Route = createFileRoute(
  "/(authenticated)/attendances/presence/clock_in/"
)({
  component: RouteComponent,
});

function RouteComponent() {
  useEffect(() => {
    document.title = "Clock In";
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

  const { mutate, isPending } = useSubmitPresence();

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
    const formattedLocation = `${location?.latitude},${location?.longitude}`;

    mutate({
      clock_in_photo: photo!,
      clock_in_location: formattedLocation,
    });
  };

  return (
    <PageGuard allowedRoles={[ROLE.STAFF]}>
      <Page isLoading={isLoading}>
        <div className="flex flex-col items-center">
          <div className="relative w-full">
            <h1 className="absolute left-1/2 -translate-x-1/2 text-xl font-bold">
              Take Photo
            </h1>
            <div className="flex justify-end">
              <Badge className="text-xl" variant="outline">
                <Clock
                  ticking={true}
                  timezone="Asia/Jakarta"
                  format="hh:mm:ss"
                />
              </Badge>
            </div>
          </div>

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
