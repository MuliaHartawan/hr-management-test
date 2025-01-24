import L from "leaflet";

type TMarkerParams = {
    photoUrl: string;
    type: "clockIn" | "clockOut";
}

export const generatePhotoMarker = ({photoUrl, type}: TMarkerParams): L.DivIcon => {
    return new L.DivIcon({
        html: `
        <div class="relative w-20 h-20 ">
    <!-- Ikon lokasi berwarna -->
    <svg xmlns="http://www.w3.org/2000/svg" class="inset-0 w-full h-full -ml-5" viewBox="0 0 24 24" fill="none" stroke=${type === "clockIn" ? "#05df72" : "#ff6467" } stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 3.87 7 11 7 11s7-7.13 7-11c0-3.87-3.13-7-7-7z" fill=${type === "clockIn" ? "#05df72" : "#ff6467" } />
        <path d="M12 12c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z" fill="white" />
    </svg>
    
    <!-- Gambar pengguna di atas ikon lokasi -->
    <img src="${photoUrl}" alt="Photo" class="absolute w-10 h-10 rounded-full bottom-7 " />
</div>
        `,
        iconSize: [40, 40], // Adjust size as needed
        iconAnchor: [13, 26], // Anchors the icon at its center bottom
        popupAnchor: [0, -26],
        className: ""
    });
};
