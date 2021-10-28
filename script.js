// Mapbox data
mapboxgl.accessToken =
  "pk.eyJ1IjoiamZlcm4wNzUiLCJhIjoiY2t0MnpuaXphMHNpMzJ1bnhjeWlxNTQ5MyJ9.o1NOIZ1hRvQcXmR7jxAtLQ";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/jfern075/ckt5s06110bdx17nk6tcacn53",
  center: [-80.15, 25.85], // starting position [lng, lat]
  zoom: 12, // starting zoom
  maxZoom: 14, // max zoom in
  minZoom: 11, // max zoom out
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

var data = ["Temp", "ODO", "pH", "Salinity", "Chlorophyll", "Turbidity"];
var booldata = [true, false, false, false, false, false];
var buttons = [
  "TempButton",
  "ODOButton",
  "pHButton",
  "SalButton",
  "ChButton",
  "TurButton",
];
var info = [
  "Tempinfo",
  "ODOinfo",
  "pHinfo",
  "Salinityinfo",
  "Chlorophyllinfo",
  "Turbidityinfo",
];
var opacities = [0.7, 0.14, 0.6, 0.7, 0.37, 0.5];

/*For loop that turns all the data's opacity to zero*/
map.on("load", function () {
  changeLegend("temp_level");
  for (var i = 0; i < data.length; i++) {
    map.setPaintProperty(data[i], "circle-opacity", 0);
  }
  document.getElementById("TempButton").style.background = "#1d1f27";
  document.getElementById("TempButton").style.color = "rgb(255, 255, 255)";
  map.setPaintProperty("Temp", "circle-opacity", 0.7);
});

mapbutton.addEventListener("click", function () {
  window.scrollTo({
    top: 1300,
    left: 0,
    behavior: "smooth",
  });
});

for (var i = 0; i < info.length; i++) {
  document.getElementById(info[i]).style.display = "none";
}

document.getElementById("Tempinfo").style.display = "inline";

TempButton.addEventListener("click", function () {
  toggleEvent(0);
});

ODOButton.addEventListener("click", function () {
  toggleEvent(1);
});

pHButton.addEventListener("click", function () {
  toggleEvent(2);
});

SalButton.addEventListener("click", function () {
  toggleEvent(3);
});

ChButton.addEventListener("click", function () {
  toggleEvent(4);
});

TurButton.addEventListener("click", function () {
  toggleEvent(5);
});

var mostRecentButton = -1;

function toggleEvent(i) {
  // Toggle true or false
  booldata[i] = !booldata[i];

  if (booldata[i]) toggleOn(i);
  else toggleOff(i);
}

function mRBLightOn(idx) {
  var b = document.getElementById(buttons[idx]);
  b.style.background = "rgb(218, 165, 32)";
  b.style.color = "rgb(255, 255, 255)";
}

function mRBLightOff(idx) {
  if (idx >= 0) {
    var b = document.getElementById(buttons[idx]);
    console.log(b.style.background);
    if (b.style.background == "rgb(218, 165, 32)") {
      b.style.background = "#1d1f27";
      b.style.color = "rgb(255, 255, 255)";
    }
  }
}

function toggleOn(idx) {
  var parameter = data[idx];
  var b = document.getElementById(buttons[idx]);

  map.setPaintProperty(parameter, "circle-opacity", opacities[idx]);

  b.style.background = "#1d1f27";
  b.style.color = "rgb(255, 255, 255)";
  console.log(mostRecentButton);
  mRBLightOff(mostRecentButton);
  mostRecentButton = idx;
  mRBLightOn(mostRecentButton);

  for (var i = 0; i < info.length; i++)
    document.getElementById(info[i]).style.display = "none";

  document.getElementById(info[idx]).style.display = "inline";
}

function toggleOff(idx) {
  var parameter = data[idx];
  var b = document.getElementById(buttons[idx]);

  map.setPaintProperty(parameter, "circle-opacity", 0);

  b.style.background = "rgb(255, 255, 255)";
  b.style.color = "rgb(0, 0, 0)";
}

function changeLegend(val) {
  var vals = [
    "temp_level",
    "odo_level",
    "pH_level",
    "sal_level",
    "ch_level",
    "tur_level",
  ];
  var bars = ["tempbar", "ODObar", "pHbar", "salbar", "chlbar", "turbar"];
  var rows = ["tempRow", "ODORow", "pHRow", "salRow", "chlRow", "turRow"];
  var row_labels = [
    "Temperature",
    "Dissolved Oxygen",
    "pH",
    "Salinity",
    "Chlorophyll",
    "Turbidity",
  ];
  var left_legend = ["Low", "High", "Alkaline", "Low", "Low", "Low"];
  var right_legend = ["High", "Low", "Acidic", "High", "High", "High"];
  var row_gradients = [
    "linear-gradient(to left, #FA0000, #78F7F7)",
    "linear-gradient(to left, #F7EE69, #65D350)",
    "linear-gradient(to left, #FF910A, #1C1D4F)",
    "linear-gradient(to left, #F4156B, #9DA4D8)",
    "linear-gradient(to left, #4D16DA, #42D01B)",
    "linear-gradient(to left, #9BF40B, #5AEFF6)",
  ];

  // Grab map-overlay-legend div, set display to block
  var legendLabel = document.getElementById("map-overlay-legend");
  legendLabel.style.display = "block";

  // Fetch index with input val
  var idx;
  for (var i = 0; i < vals.length; i++) {
    if (val === vals[i]) idx = i;
  }

  // Use index value and arrays to populate legends
  if (!legendLabel.innerHTML.includes(bars[idx])) {
    legendLabel.innerHTML +=
      '<div class="row" id="' +
      rows[idx] +
      '"><div class="label"><p class="label">' +
      row_labels[idx] +
      '</p></div><div id="legend" class="legend"><div class="bar" id="' +
      bars[idx] +
      '"></div><div class="gradContainer" id="gradNum"></div><div class="legendtext"><p class="leftlegendtext">' +
      left_legend[idx] +
      '</p><p class="rightlegendtext">' +
      right_legend[idx] +
      "</p></div></div></div>";
    document.getElementById(bars[idx]).style.background = row_gradients[idx];
  } else {
    document.getElementById(rows[idx]).remove();
    if (!legendLabel.innerHTML.includes('"row"')) {
      legendLabel.style.display = "none";
    }
  }
}
