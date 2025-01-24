import L from 'leaflet';

export const createCustomClusterIcon = (cluster: L.MarkerCluster) => {
    const count = cluster.getChildCount();
    let backgroundColor;
    let borderColor;

    if (count >= 1000) {
        borderColor = 'bg-purple-300';
        backgroundColor = 'bg-purple-400';
    } else if (count >= 100) {
        borderColor = 'bg-blue-300';
        backgroundColor = 'bg-blue-400';
    } else if (count >= 50) {
        borderColor = 'bg-orange-300';
        backgroundColor = 'bg-orange-400';
    } else {
        borderColor = 'bg-green-300';
        backgroundColor = 'bg-green-400';
    }

    return L.divIcon({
        html: `
        <div class='relative rounded-full flex items-center justify-center w-12 h-12'>
            <div class='${borderColor} absolute z-10  blur-sm rounded-full flex items-center justify-center w-14 h-14 bg-opacity-80'></div>
            <div class='${backgroundColor} text-white absolute z-20 rounded-full flex items-center justify-center w-10 h-10'>
                <p class="absolute">${count}</p>
            </div>
        </div>
        `,
        className: "custom-marker-cluster",
        iconSize: L.point(50, 50, true)
    });
};