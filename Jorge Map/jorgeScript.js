mapboxgl.accessToken =
  "pk.eyJ1Ijoic2NvdXRiaXJkcyIsImEiOiJja3Q5ZWl1bmcxYmVqMnBuenduejVvNTdiIn0.YP8oU2KJ4nrwd5IdPIo3XQ";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/scoutbirds/cktmgxnmt2tjy17o3tovbe9k0",
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

var data = ["Temp", "Salinity", "ODO", "Chlorophyll", "Turbidity", "pH"];

/*For loop that turns all the data's opacity to zero*/
map.on("load", function () {
  for (var i = 0; i < data.length; i++) {
    map.setPaintProperty(data[i], "circle-opacity", 0);
  }
  map.setPaintProperty("Temp", "circle-opacity", 1); //turns Temperature data opacity to 1
  changeLegend("temp_level");
});

mapbutton.addEventListener("click", function () {
  window.scrollTo({
    top: 1300,
    left: 0,
    behavior: "smooth",
  });
});

var info = [
  "Tempinfo",
  "ODOinfo",
  "pHinfo",
  "Salinityinfo",
  "Chlorophyllinfo",
  "Turbidityinfo",
];

for (var i = 0; i < info.length; i++) {
  document.getElementById(info[i]).style.display = "none";
}

document.getElementById("Tempinfo").style.display = "inline";

//Listens for the temperature button
TempButton.addEventListener("click", function () {
  //Makes all the categories opacity zero
  for (var i = 0; i < data.length; i++) {
    map.setPaintProperty(data[i], "circle-opacity", 0);
  }

  for (var i = 0; i < info.length; i++) {
    document.getElementById(info[i]).style.display = "none";
  }

  //makes the temperature category 1
  map.setPaintProperty("Temp", "circle-opacity", 1);
  document.getElementById("Tempinfo").style.display = "inline";
});

pHButton.addEventListener("click", function () {
  for (var i = 0; i < data.length; i++) {
    map.setPaintProperty(data[i], "circle-opacity", 0);
  }

  for (var i = 0; i < info.length; i++) {
    document.getElementById(info[i]).style.display = "none";
  }

  map.setPaintProperty("pH", "circle-opacity", 1);
  document.getElementById("pHinfo").style.display = "inline";
});

ODOButton.addEventListener("click", function () {
  for (var i = 0; i < data.length; i++) {
    map.setPaintProperty(data[i], "circle-opacity", 0);
  }

  for (var i = 0; i < info.length; i++) {
    document.getElementById(info[i]).style.display = "none";
  }

  map.setPaintProperty("ODO", "circle-opacity", 1);

  document.getElementById("ODOinfo").style.display = "inline";
});

SalButton.addEventListener("click", function () {
  for (var i = 0; i < data.length; i++) {
    map.setPaintProperty(data[i], "circle-opacity", 0);
  }

  for (var i = 0; i < info.length; i++) {
    document.getElementById(info[i]).style.display = "none";
  }
  map.setPaintProperty("Salinity", "circle-opacity", 1);

  document.getElementById("Salinityinfo").style.display = "inline";
});

ChButton.addEventListener("click", function () {
  for (var i = 0; i < data.length; i++) {
    map.setPaintProperty(data[i], "circle-opacity", 0);
  }

  for (var i = 0; i < info.length; i++) {
    document.getElementById(info[i]).style.display = "none";
  }
  map.setPaintProperty("Chlorophyll", "circle-opacity", 1);

  document.getElementById("Chlorophyllinfo").style.display = "inline";
});

TurButton.addEventListener("click", function () {
  for (var i = 0; i < data.length; i++) {
    map.setPaintProperty(data[i], "circle-opacity", 0);
  }

  for (var i = 0; i < info.length; i++) {
    document.getElementById(info[i]).style.display = "none";
  }
  map.setPaintProperty("Turbidity", "circle-opacity", 1);

  document.getElementById("Turbidityinfo").style.display = "inline";
});

///=========================================================================
// to change the map legend key
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
      legend.innerHTML = '<div class="legendtext"><p class="leftlegendtext">Low</p><p class="rightlegendtext">High</p></div>';
      c[0].style.background = "linear-gradient(to left, #FFFFFF, #FFA500)";
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