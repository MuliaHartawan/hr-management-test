import { CameraType } from "react-camera-pro";
import { Location } from "..";

interface Params {
  location: Location | null;
  district: string | undefined;
  canvasRef: React.RefObject<HTMLCanvasElement>;
  cameraRef: React.RefObject<CameraType>;
  setPhoto: React.Dispatch<React.SetStateAction<string | null>>;
}

export const handleTakePhoto = ({
  location,
  district,
  canvasRef,
  cameraRef,
  setPhoto,
}: Params) => {
  if (cameraRef.current) {
    const takenPhoto = cameraRef.current.takePhoto();
    if (canvasRef.current && takenPhoto) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      if (context) {
        const img = new Image();
        img.src = takenPhoto as string;

        img.onload = () => {
          canvas.width = img.width;
          canvas.height = img.height;
          context.drawImage(img, 0, 0);

          const fontSize = Math.max(16, canvas.width * 0.04);
          context.font = `${fontSize}px Arial`;
          context.fillStyle = "white";
          context.textBaseline = "top";

          const currentTime = new Date().toLocaleString();

          const textLines = [
            `District: ${district || "Unknown"}`,
            `Lat: ${location?.latitude?.toFixed(6) || "Unknown"}, Lon: ${
              location?.longitude?.toFixed(6) || "Unknown"
            }`,
            `Time: ${currentTime}`,
          ];

          const maxWidth = canvas.width - 40;
          const lineHeight = fontSize * 1.2;
          let yOffset = canvas.height - 30 - lineHeight * textLines.length;

          textLines.forEach((line) => {
            if (context.measureText(line).width > maxWidth) {
              let currentLine = "";
              line.split(" ").forEach((word) => {
                const testLine = currentLine ? `${currentLine} ${word}` : word;
                if (context.measureText(testLine).width > maxWidth) {
                  context.fillText(currentLine, 20, yOffset);
                  yOffset += lineHeight;
                  currentLine = word;
                } else {
                  currentLine = testLine;
                }
              });
              if (currentLine) {
                context.fillText(currentLine, 20, yOffset);
                yOffset += lineHeight;
              }
            } else {
              context.fillText(line, 20, yOffset);
              yOffset += lineHeight;
            }
          });

          const watermarkedPhoto = canvas.toDataURL("image/png");
          setPhoto(watermarkedPhoto);
        };
      }
    }
  }
};
