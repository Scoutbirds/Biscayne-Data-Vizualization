mapboxgl.accessToken =
  "pk.eyJ1Ijoic2NvdXRiaXJkcyIsImEiOiJja3Q5ZWl1bmcxYmVqMnBuenduejVvNTdiIn0.YP8oU2KJ4nrwd5IdPIo3XQ";
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

  z = document.getElementById("gradNum");
  y = document.getElementsByClassName("gradBox");

  var arr = [];
  var txt = "";

  if (val == "temp_level") {
    arr = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    col = [
      "blue",
      "red",
      "orange",
      "pink",
      "yellow",
      "black",
      "purple",
      "navy",
      "red",
      "blue",
    ];

    for (x in (arr, col)) {
      z.innerHTML =
        txt +
        '<div class="row"><div class="gradBox"></div><div class="label"><p>' +
        arr[x] +
        "</p></div></div>";
      y[x].style.background = col[x];
      txt = z.innerHTML;
    }
  }

  if (val == "pH_level") {
    arr = ["0-1", "1-2", "2-3", "3-4", "4-5"];
    col = ["red", "orange", "orange", "orange", "yellow"];

    for (x in (arr, col)) {
      z.innerHTML =
        txt +
        '<div class="row"><div class="gradBox"></div><div class="label"><p>' +
        arr[x] +
        "</p></div></div>";
      y[x].style.background = col[x];
      txt = z.innerHTML;
    }
  }

  if (val == "odo_level") {
    arr = [
      "<1",
      "1-2",
      "2-3",
      "3-4",
      "4-5",
      "5-6",
      "6-7",
      "7-8",
      "8-9",
      "9-10",
      "10-11",
      "11-12",
      "12>",
    ];
    col = [
      "purple",
      "red",
      "orange",
      "pink",
      "yellow",
      "black",
      "blue",
      "violet",
      "green",
      "red",
      "blue",
      "orange",
      "green",
    ];

    for (x in (arr, col)) {
      z.innerHTML =
        txt +
        '<div class="row"><div class="gradBox"></div><div class="label"><p>' +
        arr[x] +
        "</p></div></div>";
      y[x].style.background = col[x];
      txt = z.innerHTML;
    }
  }

  if (val == "sal_level") {
    arr = [1, 2, 3, 4];
    col = ["red", "blue", "pink", "yellow"];

    for (x in (arr, col)) {
      z.innerHTML =
        txt +
        '<div class="row"><div class="gradBox"></div><div class="label"><p>' +
        arr[x] +
        "</p></div></div>";
      y[x].style.background = col[x];
      txt = z.innerHTML;
    }
  }

  if (val == "ch_level") {
    arr = [1, 2, 3, 4, 5];
    col = ["red", "white", "blue", "green", "black"];

    for (x in (arr, col)) {
      z.innerHTML =
        txt +
        '<div class="row"><div class="gradBox"></div><div class="label"><p>' +
        arr[x] +
        "</p></div></div>";
      y[x].style.background = col[x];
      txt = z.innerHTML;
    }
  }

  if (val == "tur_level") {
    arr = [1, 2, 3];
    col = ["red", "white", "blue"];

    for (x in (arr, col)) {
      z.innerHTML =
        txt +
        '<div class="row"><div class="gradBox"></div><div class="label"><p>' +
        arr[x] +
        "</p></div></div>";
      y[x].style.background = col[x];
      txt = z.innerHTML;
    }
  }
}
