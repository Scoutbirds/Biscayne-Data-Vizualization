// Mapbox data
mapboxgl.accessToken =
  "pk.eyJ1IjoiamZlcm4wNzUiLCJhIjoiY2t0MnpuaXphMHNpMzJ1bnhjeWlxNTQ5MyJ9.o1NOIZ1hRvQcXmR7jxAtLQ";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/jfern075/ckt5s06110bdx17nk6tcacn53",
  center: [-80.15, 25.85], // starting position [lng, lat]
  zoom: 12, // starting zoom
  //maxZoom: 14, // max zoom in
  //minZoom: 11, // max zoom out
});
map.addControl(new mapboxgl.NavigationControl());

// add scale control to the map
const scale = new mapboxgl.ScaleControl({
  maxWidth: 100,
  unit: 'imperial'
});
map.addControl(scale, 'bottom-right');
scale.setUnit('imperial');

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


// create Layer class with methods
class Layer {
  constructor(name, status) {
    this.name = name;
    this.status = status;
  }

  getName() { return this.name; }
  getStatus() { return this.status; }
  setName(name) { this.name = name; }
  setStatus(status) { this.status = status; }

  toString() {
    console.log(this.name + " : " + this.status);
  }
}

// create layer objects
var ph_arr = new Layer('ph', false);
var temp_arr = new Layer('temp', false);
var odo_arr = new Layer('odo', false);
var salinity_arr = new Layer('salinity', false);
var turbidity_arr = new Layer('turbidity', false);
var chlorophyll_arr = new Layer('chlorophyll', false);

// create array
let layers = [];
layers.push(ph_arr);
layers.push(temp_arr);
layers.push(odo_arr);
layers.push(salinity_arr);
layers.push(turbidity_arr);
layers.push(chlorophyll_arr);

// remove layers/source
function removeLayers()
{
  for (x in layers)
  {
    if (layers[x].getStatus() == true)
    {
      map.removeLayer(layers[x].getName());
    }
  }
}


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

for (var i = 0; i < info.length; i++) {
  document.getElementById(info[i]).style.display = "none";
}

document.getElementById("Tempinfo").style.display = "inline";

TempButton.addEventListener("click", function () {
  toggleEvent(0);
  removeLayers();
  addLayerTemp();
  dataPoints('temp');
});

ODOButton.addEventListener("click", function () {
  toggleEvent(1);
  removeLayers();
  addLayerOdo();
  dataPoints('odo');
});

pHButton.addEventListener("click", function () {
  toggleEvent(2);
  removeLayers();
  addLayerPh();
  dataPoints('ph');
});

SalButton.addEventListener("click", function () {
  toggleEvent(3);
  removeLayers();
  addLayerSalinity();
  dataPoints('salinity');
});

ChButton.addEventListener("click", function () {
  toggleEvent(4);
  removeLayers();
  addLayerCholrophyll();
  dataPoints('chlorophyll');
});

TurButton.addEventListener("click", function () {
  toggleEvent(5);
  removeLayers();
  addLayerTurbidity();
  dataPoints('turbidity');
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
    if (
      b.style.background == "rgb(218, 165, 32)" ||
      b.style.background.includes("rgb(218, 165, 32)")
    ) {
      b.style.background = "#1d1f27";
      b.style.color = "rgb(255, 255, 255)";
    }
  }
}

function toggleOn(idx) {
  var parameter = data[idx];
  var b = document.getElementById(buttons[idx]);

  map.setPaintProperty(parameter, "circle-opacity", opacities[idx]);

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

/*============================*/
// to show data info box
function showDataInfoBox()
{
  var box = document.getElementById("dataInfoBox");

  if (box.style.display === "block")
  {
    box.style.display = "none";
  }
  else
  {
    box.style.display = "block";
  }
} 

/*==============================*/
map.on('load', () => {
  map.addSource('data_all', {
    'type' : 'geojson',
    'data' : './biscayne.geojson' // location of geojson file
  });
});

/* Layer for temp */
function addLayerTemp()
{
  map.addLayer({
    'id' : 'temp',
    'type' : 'circle',
    'source' : 'data_all',
    paint: {
      'circle-radius': [
        'step',
        ['get', 'Temp °C'],
        5,
        30.0,
        6.5,
        31.0,
        8,
        32.0,
        9.5,
        33.0,
        10,
      ],
      'circle-stroke-width': [
        'case',
        ['boolean', ['feature-state', 'hover'], false],
        1,
        0.1
        ],
      'circle-stroke-color': '#000',
      'circle-color': [
        'step',
        ['get', 'Temp °C'],
        'green',
        30.0,
        'red',
        31.0,
        'blue',
        32.0,
        'yellow',
        33.0,
        'purple',
      ],
      'circle-opacity': 0.7
    },        
  });
}

/* Layer for ph */
function addLayerPh()
{
  map.addLayer({
    'id' : 'ph',
    'type' : 'circle',
    'source' : 'data_all',
    paint: {
      'circle-radius': [
        'step',
        ['get', 'pH'],
        5,
        7.0,
        6,
        7.5,
        7,
        7.75,
        8,
        8.0,
        9
      ],
      'circle-stroke-width': [
        'case',
        ['boolean', ['feature-state', 'hover'], false],
        1,
        0.1
        ],
      //'circle-stroke-color': '#000',
      'circle-color': [
        'step',
        ['get', 'pH'],
        'red',
        7.0,
        'blue',
        7.5,
        'green',
        7.75,
        'yellow',
        8.0,
        'orange',
      ],
      'circle-opacity': 0.7
    },        
  });
}

/* Layer for odo */
function addLayerOdo()
{
    map.addLayer({
      'id' : 'odo',
      'type' : 'circle',
      'source' : 'data_all',
      paint: {
        'circle-radius': [
          'step',
          ['get', 'ODO mg/L'],
          5,
          2.0,
          6,
          3.0,
          7,
          4.0,
          8,
          5.0,
          9
        ],
        'circle-stroke-width': [
          'case',
          ['boolean', ['feature-state', 'hover'], false],
          1,
          0.1
          ],
        //'circle-stroke-color': '#000',
        'circle-color': [
          'step',
          ['get', 'ODO mg/L'],
          'purple',
          2.0,
          'red',
          3.0,
          'orange',
          4.0,
          'pink',
          5.0,
          'blue',
        ],
        'circle-opacity': 0.7
      },        
    });
}

/* Layer for salinty */
function addLayerSalinity()
{
  map.addLayer({
    'id' : 'salinity',
    'type' : 'circle',
    'source' : 'data_all',
    paint: {
      'circle-radius': [
        'step',
        ['get', 'Sal psu'],
        5,
        25.0,
        6.5,
        27.0,
        8,
        29.0,
        9.5,
      ],
      'circle-stroke-width': [
        'case',
        ['boolean', ['feature-state', 'hover'], false],
        1,
        0.1
        ],
      'circle-stroke-color': '#000',
      'circle-color': [
        'step',
        ['get', 'Sal psu'],
        'red',
        25.0,
        'green',
        27.0,
        'blue',
        29.0,
        'yellow'
      ],
      'circle-opacity': 0.7
    },        
  });
}

/* Layer for chlorophyll */
function addLayerCholrophyll()
{
  map.addLayer({
    'id' : 'chlorophyll',
    'type' : 'circle',
    'source' : 'data_all',
    paint: {
      'circle-radius': [
        'step',
        ['get', 'Chlorophyll ug/L'],
        5,
        2.0,
        3,
        5.0,
        4
      ],
      'circle-stroke-width': [
        'case',
        ['boolean', ['feature-state', 'hover'], false],
        1,
        0.1
        ],
      'circle-stroke-color': '#000',
      'circle-color': [
        'step',
        ['get', 'Chlorophyll ug/L'],
        'red',
        2.0,
        'blue',
        5.0,
        'green'
      ],
      'circle-opacity': 0.7
    },        
  });
}

/* Layer for turbidity */
function addLayerTurbidity()
{
  map.addLayer({
    'id' : 'turbidity',
    'type' : 'circle',
    'source' : 'data_all',
    paint: {
      'circle-radius': [
        'step',
        ['get', 'Turbidity FNU'],
        5,
        10.0,
        6,
        20.0,
        8
      ],
      'circle-stroke-width': [
        'case',
        ['boolean', ['feature-state', 'hover'], false],
        1,
        0.1
        ],
      'circle-stroke-color': '#000',
      'circle-color': [
        'step',
        ['get', 'Turbidity FNU'],
        'red',
        10.0,
        'blue',
        20.0,
        'orange'
      ],
      'circle-opacity': 0.7
    },        
  });
}


function dataPoints(selectLayer)
{
  /* data hover point info process */
  let hoverStatus = null;

  /* when mouse hover on data point */
  map.on('mouseenter', selectLayer, (e) => {
    map.getCanvas().style.cursor = 'pointer';

    /* get info from geojson file  */
    const temp_val = e.features[0].properties["Temp °C"];
    const ph_val = e.features[0].properties["pH"];
    const odo_val = e.features[0].properties["ODO mg/L"];
    const turbidity_val = e.features[0].properties["Turbidity FNU"];
    const salinity_val = e.features[0].properties["Sal psu"];
    const chlorophyll_val = e.features[0].properties["Chlorophyll ug/L"];
    const date_val = e.features[0].properties["Timestamp"];

    /* setup the date */
    dt = new Date(date_val);
    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    full_months = months[dt.getMonth()];

    full_date = full_months + " " + dt.getDate() + ", " + dt.getFullYear();   

    if (dt.getHours() > 12 ? ampm = 'pm' : ampm = 'am');
    if (dt.getHours() > 12 ? hr = dt.getHours()-12 : hr = dt.getHours());
    if (hr <=9 ? hr = '0'+ hr : hr);
    if (dt.getMinutes() <= 9 ? mnt = '0' + dt.getMinutes() : mnt = dt.getMinutes()); 
    if (dt.getSeconds() <= 9 ? sec = '0' + dt.getSeconds() : sec = dt.getSeconds());

    full_time = hr + ":" + mnt + ":" + sec + " " + ampm;  

    //full_time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();

    /* put data point info onto map */
    document.getElementById("temp_info").innerHTML = `${temp_val} °C`;
    document.getElementById("time_info").innerHTML = full_time;
    document.getElementById("ph_info").innerHTML = ph_val;
    document.getElementById("odo_info").innerHTML = `${odo_val} mg/L`;
    document.getElementById("turbidity_info").innerHTML = `${turbidity_val} FNU`;
    document.getElementById("salinity_info").innerHTML = `${salinity_val} psu`;
    document.getElementById("chlorophyll_info").innerHTML = `${chlorophyll_val} ug/L`;
    document.getElementById("date_info").innerHTML = full_date;
  });

  /* when mouse hover off data point */
  map.on('mouseleave', selectLayer, () => {
    map.getCanvas().style.cursor = '';

    /* to clear data point info */
    document.getElementById("temp_info").innerHTML = '';
    document.getElementById("time_info").innerHTML = '';
    document.getElementById("ph_info").innerHTML = '';
    document.getElementById("odo_info").innerHTML = '';
    document.getElementById("turbidity_info").innerHTML = '';
    document.getElementById("salinity_info").innerHTML = '';
    document.getElementById("chlorophyll_info").innerHTML = '';
    document.getElementById("date_info").innerHTML = '';
  });
} 


