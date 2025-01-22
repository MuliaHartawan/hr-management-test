export const convertToBlob = (base64: string): Blob => {
  const base64Data = base64.split(",")[1];
  if (!base64Data) {
    throw new Error("Invalid base64 string");
  }

  const byteString = atob(base64Data);
  const mimeString = base64.match(/data:(.*?);base64/)?.[1] || "image/jpeg";

  const buffer = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) {
    buffer[i] = byteString.charCodeAt(i);
  }

  return new Blob([buffer], { type: mimeString });
};
