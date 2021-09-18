
mapboxgl.accessToken = "pk.eyJ1Ijoic2NvdXRiaXJkcyIsImEiOiJja3Q5ZWl1bmcxYmVqMnBuenduejVvNTdiIn0.YP8oU2KJ4nrwd5IdPIo3XQ";
var map = new mapboxgl.Map({
container: "map",
style: "mapbox://styles/scoutbirds/cktmgxnmt2tjy17o3tovbe9k0",
center: [-80.15, 25.85], // starting position [lng, lat]
zoom: 12, // starting zoom
});
map.addControl(new mapboxgl.NavigationControl());
map.scrollZoom.disable();



var data = ["Temp", "Salinity", "ODO","Chlorophyll","Turbidity", "pH"];
var Bdata = ["Buoy_Temp", "Buoy_Sal", "Buoy_ODO", "Buoy_Chlor", "Buoy_Turb", "Buoy_PH"];
const layer = document.getElementById("layer");

map.on('load', function () {
for(var i = 0; i < data.length; i++){
    map.setPaintProperty(data[i], "circle-opacity", 0);
    map.setPaintProperty(Bdata[i], "circle-opacity", 0);
}
map.setPaintProperty("ODO", "circle-opacity", 1);
map.setPaintProperty("Buoy_ODO", "circle-opacity", 0.5);
map.setPaintProperty("biscayne-bay-data", "circle-opacity", 0.1);
});

const gradient = document.getElementById("legend")


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
