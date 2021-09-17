// Mapbox instantiation
mapboxgl.accessToken = 'pk.eyJ1Ijoic2NvdXRiaXJkcyIsImEiOiJja3Q5ZWl1bmcxYmVqMnBuenduejVvNTdiIn0.YP8oU2KJ4nrwd5IdPIo3XQ';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/scoutbirds/ckt9elngu170217qnwoed80vx', // style URL
    center: [-80.149, 25.848], // starting position [lng, lat]
    zoom: 12.74 // starting zoom
});


if(x=1);

// Buoy 1
const coralGables = new mapboxgl.Marker()
    .setLngLat([-80.26966, 25.72695])
    .addTo(map);

// Buoy 2
const northBiscayneBay = new mapboxgl.Marker()
    .setLngLat([-80.16712, 25.86171])
    .addTo(map);

// Buoy 3
const littleRiver = new mapboxgl.Marker()
    .setLngLat([-80.176921, 25.846346])
    .addTo(map);






