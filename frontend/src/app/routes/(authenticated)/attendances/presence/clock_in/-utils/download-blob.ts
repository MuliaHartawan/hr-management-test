import { convertToBlob } from "./convert-to-blob";

export const downloadBlob = (base64: string, fileName: string) => {
  const blob = convertToBlob(base64);

  const blobUrl = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = blobUrl;
  a.download = fileName;
  a.style.display = "none";

  document.body.appendChild(a);

  a.click();

  document.body.removeChild(a);
  URL.revokeObjectURL(blobUrl);
};
