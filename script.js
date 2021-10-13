// Mapbox data
mapboxgl.accessToken = "pk.eyJ1IjoiamZlcm4wNzUiLCJhIjoiY2t0MnpuaXphMHNpMzJ1bnhjeWlxNTQ5MyJ9.o1NOIZ1hRvQcXmR7jxAtLQ";
var map = new mapboxgl.Map({
container: "map",
style: "mapbox://styles/jfern075/ckt5s06110bdx17nk6tcacn53",
center: [-80.15, 25.85], // starting position [lng, lat]
zoom: 12, // starting zoom
maxZoom: 14, // max zoom in
minZoom: 11 // max zoom out
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

//---------------------------------------------------------------------
// Parameter Logic starts here

var data = ["Temp", "ODO", "pH", "Salinity", "Chlorophyll","Turbidity"];
var booldata = [1, 0, 0, 0, 0, 0];
var buttons = ["TempButton", "ODOButton", "pHButton", "SalButton", "ChButton", "TurButton"];
var info = ["Tempinfo", "ODOinfo", "pHinfo", "Salinityinfo", "Chlorophyllinfo", "Turbidityinfo"];
var opacities = [0.7, 0.14, 0.2, 0.7, 0.37, 0.5];

/*For loop that turns all the data's opacity to zero*/
map.on('load', function () 
{
    for(var i = 0; i < data.length; i++){
        if (data[i] == "Temp")
            map.setPaintProperty(data[i], "heatmap-opacity", 0);
        else 
            map.setPaintProperty(data[i], "circle-opacity", 0);
    }
    document.getElementById("TempButton").style.background = "#1d1f27";
    document.getElementById("TempButton").style.color = "rgb(255, 255, 255)";
    map.setPaintProperty("Temp", "heatmap-opacity", 0.7);
});

mapbutton.addEventListener("click", function()
{
    window.scrollTo(
        {
            top: 1300,
            left:0,
            behavior:"smooth",
        });
})

for(var i = 0; i < info.length; i++){
    document.getElementById(info[i]).style.display = "none"
}

document.getElementById("Tempinfo").style.display = "inline"

TempButton.addEventListener("click", function()
{
    // Toggle true or false
    booldata[0] = !booldata[0];
    
    if (booldata[0])
        toggleOn(0)
    else 
        toggleOff(0)
})

ODOButton.addEventListener("click", function()
{
    booldata[1] = !booldata[1];
    
    if (booldata[1])
        toggleOn(1)
    else 
        toggleOff(1)
})

pHButton.addEventListener("click", function()
{
    booldata[2] = !booldata[2];
    
    if (booldata[2])
        toggleOn(2)
    else 
        toggleOff(2)
})


SalButton.addEventListener("click", function()
{
    booldata[3] = !booldata[3];
    
    if (booldata[3])
        toggleOn(3)
    else 
        toggleOff(3)
})

ChButton.addEventListener("click", function()
{
    booldata[4] = !booldata[4];
    
    if (booldata[4])
        toggleOn(4)
    else 
        toggleOff(4)
})

TurButton.addEventListener("click", function()
{    
    booldata[5] = !booldata[5];
    
    if (booldata[5])
        toggleOn(5)
    else 
        toggleOff(5)
})

function toggleOn(idx){
    
    var parameter = data[idx];
    var b = document.getElementById(buttons[idx]);
    
    if (parameter == "Temp")
        map.setPaintProperty(parameter, "heatmap-opacity", opacities[idx]);
    else
        map.setPaintProperty(parameter, "circle-opacity", opacities[idx]);
    
    b.style.background = "#1d1f27";
    b.style.color = "rgb(255, 255, 255)";
       
    for(var i = 0; i < info.length; i++)
        document.getElementById(info[i]).style.display = "none"
    
    document.getElementById(info[idx]).style.display = "inline"
}

function toggleOff(idx){
    
    var parameter = data[idx];
    var b = document.getElementById(buttons[idx]);
    
    if (parameter == "Temp")
        map.setPaintProperty(parameter, "heatmap-opacity", 0);
    else
        map.setPaintProperty(parameter, "circle-opacity", 0);
    
    b.style.background = "rgb(255, 255, 255)";
    b.style.color = "rgb(0, 0, 0)";
    b.style = "transition-duration: 0.3s";
}

function changeLegend(val) {
    document.getElementById("map-overlay-legend").style.display = "block";

    var legend = document.getElementById("gradNum");
    var c = document.getElementsByClassName("bar");
    
    if (val == "temp_level") {
        legend.innerHTML = '<div class="legendtext"><p class="leftlegendtext">Low</p><p class="rightlegendtext">High</p></div>';
        c[0].style.background = "linear-gradient(to left, #FF0000, #00FF00, #00FFFF)";
    }
    
    if (val == "pH_level") {
        legend.innerHTML = '<div class="legendtext"><p class="leftlegendtext">Acidic</p><p class="rightlegendtext">Alkaline</p></div>';
        c[0].style.background = "linear-gradient(to left, #0C86B6, #7EE4F6, #FCB6F7, #AA0303)";
    }
    
    if (val == "odo_level"){
        legend.innerHTML = '<div class="legendtext"><p class="leftlegendtext">High</p><p class="rightlegendtext">Low</p></div>';
        c[0].style.background = "linear-gradient(to left, #FFA500, #FFFFFF)";
    }
        
    if (val == "sal_level") {
        legend.innerHTML = '<div class="legendtext"><p class="leftlegendtext">Low</p><p class="rightlegendtext">High</p></div>';
        c[0].style.background = "linear-gradient(to left, #A032FB, #3AF2BE)";
    }
    
    if (val == "ch_level") {
        legend.innerHTML = '<div class="legendtext"><p class="leftlegendtext">Low</p><p class="rightlegendtext">High</p></div>';
        c[0].style.background = "linear-gradient(to left, #4B11DF, #8DED73)";
    }
    
    if (val == "tur_level") {
        legend.innerHTML = '<div class="legendtext"><p class="leftlegendtext">Low</p><p class="rightlegendtext">High</p></div>';
        c[0].style.background = "linear-gradient(to left, #B6FD44, #5AEFF6)";
    }
}

