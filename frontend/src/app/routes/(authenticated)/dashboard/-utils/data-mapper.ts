import {
  TDashboardData,
  TDashboardDataMapped,
} from "../-types/dashboard-data-type";

const parseLocationFromURL = (url: string | null): [number, number] | null => {
  if (!url) return null;

  const cleanedURL = url.replace(/\s+/g, "");
  const regex = /[-+]?[0-9]*\.?[0-9]+,[+-]?[0-9]*\.?[0-9]+/;
  const match = cleanedURL.match(regex);

  if (!match) return null;

  const [lat, lon] = match[0]
    .split(",")
    .map((coord) => parseFloat(coord.trim()));
  return [lat, lon];
};

export const dataMapper = ({
  data,
}: {
  data: TDashboardData;
}): TDashboardDataMapped => {
  const mappedData = data.attendanceMarker.map((marker) => {
    const clockInLocation = parseLocationFromURL(marker.clock_in_location);
    const clockOutLocation = parseLocationFromURL(marker.clock_out_location);

    return {
      ...marker,
      clock_in_location: clockInLocation,
      clock_out_location: clockOutLocation,
    };
  });

  return {
    attendanceCount: data.attendanceCount,
    attendanceMarker: mappedData,
    employeeCount: data.employeeCount,
  };
};
