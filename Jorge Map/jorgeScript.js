
mapboxgl.accessToken = "pk.eyJ1Ijoic2NvdXRiaXJkcyIsImEiOiJja3Q5ZWl1bmcxYmVqMnBuenduejVvNTdiIn0.YP8oU2KJ4nrwd5IdPIo3XQ";
var map = new mapboxgl.Map({
container: "map",
style: "mapbox://styles/scoutbirds/cktmgxnmt2tjy17o3tovbe9k0",
center: [-80.15, 25.85], // starting position [lng, lat]
zoom: 12, // starting zoom
});
map.addControl(new mapboxgl.NavigationControl());
//map.scrollZoom.disable(); //disables the scroll zoom function




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





var data = ["Temp", "Salinity", "ODO","Chlorophyll","Turbidity", "pH"];

/*For loop that turns all the data's opacity to zero*/
map.on('load', function () {
for(var i = 0; i < data.length; i++){
    map.setPaintProperty(data[i], "circle-opacity", 0);
}
map.setPaintProperty("ODO", "circle-opacity", 1); //turns Oxygen dissolved data opacity to 1
});

const gradient = document.getElementById("legend")

mapbutton.addEventListener("click", function(){
window.scrollTo(
    {
        top: 1800,
        left:0,
        behavior:"smooth",
    });
})

TempButton.addEventListener("click", function()
{
    map.setPaintProperty("Temp", "circle-opacity", 1);
    map.setPaintProperty("Salinity", "circle-opacity", 0);
    map.setPaintProperty("ODO", "circle-opacity", 0);
    map.setPaintProperty("Chlorophyll", "circle-opacity", 0);
    map.setPaintProperty("Turbidity", "circle-opacity", 0);
    map.setPaintProperty("pH", "circle-opacity", 0);


    document.querySelector('#gradient').classList.add('gradient2');
} )

pHButton.addEventListener("click", function()
{
    map.setPaintProperty("Temp", "circle-opacity", 0);
    map.setPaintProperty("Salinity", "circle-opacity", 0);
    map.setPaintProperty("ODO", "circle-opacity", 0);
    map.setPaintProperty("Chlorophyll", "circle-opacity", 0);
    map.setPaintProperty("Turbidity", "circle-opacity", 0);
    map.setPaintProperty("pH", "circle-opacity", 1);
} )


ODOButton.addEventListener("click", function()
{
    map.setPaintProperty("Temp", "circle-opacity", 0);
    map.setPaintProperty("Salinity", "circle-opacity", 0);
    map.setPaintProperty("ODO", "circle-opacity", 1);
    map.setPaintProperty("Chlorophyll", "circle-opacity", 0);
    map.setPaintProperty("Turbidity", "circle-opacity", 0);
    map.setPaintProperty("pH", "circle-opacity", 0);
} )


SalButton.addEventListener("click", function()
{
    map.setPaintProperty("Temp", "circle-opacity", 0);
    map.setPaintProperty("Salinity", "circle-opacity", 1);
    map.setPaintProperty("ODO", "circle-opacity", 0);
    map.setPaintProperty("Chlorophyll", "circle-opacity", 0);
    map.setPaintProperty("Turbidity", "circle-opacity", 0);
    map.setPaintProperty("pH", "circle-opacity", 0);
} )

ChButton.addEventListener("click", function()
{
    map.setPaintProperty("Temp", "circle-opacity", 0);
    map.setPaintProperty("Salinity", "circle-opacity", 0);
    map.setPaintProperty("ODO", "circle-opacity", 0);
    map.setPaintProperty("Chlorophyll", "circle-opacity", 1);
    map.setPaintProperty("Turbidity", "circle-opacity", 0);
    map.setPaintProperty("pH", "circle-opacity", 0);
} )

TurButton.addEventListener("click", function()
{
    map.setPaintProperty("Temp", "circle-opacity", 0);
    map.setPaintProperty("Salinity", "circle-opacity", 0);
    map.setPaintProperty("ODO", "circle-opacity", 0);
    map.setPaintProperty("Chlorphyll", "circle-opacity", 0);
    map.setPaintProperty("Turbidity", "circle-opacity", 1);
    map.setPaintProperty("pH", "circle-opacity", 0);
} )
