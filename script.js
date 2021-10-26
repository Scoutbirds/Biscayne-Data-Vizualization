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

var data = ["Temp", "ODO", "pH", "Salinity", "Chlorophyll", "Turbidity"];
var booldata = [true, false, false, false, false, false];
var buttons = ["TempButton", "ODOButton", "pHButton", "SalButton", "ChButton", "TurButton"];
var info = ["Tempinfo", "ODOinfo", "pHinfo", "Salinityinfo", "Chlorophyllinfo", "Turbidityinfo"];
var opacities = [0.7, 0.14, 0.6, 0.7, 0.37, 0.5];

/*For loop that turns all the data's opacity to zero*/
map.on('load', function() {
    changeLegend("temp_level")
    for (var i = 0; i < data.length; i++) {
        map.setPaintProperty(data[i], "circle-opacity", 0);
    }
    document.getElementById("TempButton").style.background = "#1d1f27";
    document.getElementById("TempButton").style.color = "rgb(255, 255, 255)";
    map.setPaintProperty("Temp", "circle-opacity", 0.7);
});

mapbutton.addEventListener("click", function() {
    window.scrollTo({
        top: 1300,
        left: 0,
        behavior: "smooth",
    });
})

for (var i = 0; i < info.length; i++) {
    document.getElementById(info[i]).style.display = "none"
}

document.getElementById("Tempinfo").style.display = "inline"

TempButton.addEventListener("click", function() {
    toggleEvent(0)
})

ODOButton.addEventListener("click", function() {
    toggleEvent(1)
})

pHButton.addEventListener("click", function() {
    toggleEvent(2)
})

SalButton.addEventListener("click", function() {
    toggleEvent(3)
})

ChButton.addEventListener("click", function() {
    toggleEvent(4)
})

TurButton.addEventListener("click", function() {
    toggleEvent(5)
})

function toggleEvent(i) {
    // Toggle true or false
    booldata[i] = !booldata[i];

    if (booldata[i])
        toggleOn(i)
    else
        toggleOff(i)
}

function toggleOn(idx) {

    var parameter = data[idx];
    var b = document.getElementById(buttons[idx]);

    map.setPaintProperty(parameter, "circle-opacity", opacities[idx]);

    b.style.background = "#1d1f27";
    b.style.color = "rgb(255, 255, 255)";

    for (var i = 0; i < info.length; i++)
        document.getElementById(info[i]).style.display = "none"

    document.getElementById(info[idx]).style.display = "inline"
}

function toggleOff(idx) {

    var parameter = data[idx];
    var b = document.getElementById(buttons[idx]);

    map.setPaintProperty(parameter, "circle-opacity", 0);

    b.style.background = "rgb(255, 255, 255)";
    b.style.color = "rgb(0, 0, 0)";
    b.style = "transition-duration: 0.3s";
}

function changeLegend(val) {

    var legendLabel = document.getElementById("map-overlay-legend");

    if (val == "temp_level") {
        if (!(legendLabel.innerHTML.includes('\"tempbar\"'))) {
            legendLabel.innerHTML += '<div class="row" id="tempRow"><div class="label"><p class="label">Temperature</p></div><div id="legend" class="legend"><div class="bar" id="tempbar"></div><div class="gradContainer" id="gradNum"></div><div class="legendtext"><p class="leftlegendtext">Low</p><p class="rightlegendtext">High</p></div></div></div>';
            var t = document.getElementById("tempbar");
            t.style.background = "linear-gradient(to left, #FA0000, #78F7F7)";
        } else {
            document.getElementById("tempRow").remove();
        }
    }

    if (val == "pH_level") {
        if (!(legendLabel.innerHTML.includes('\"pHbar\"'))) {
            legendLabel.innerHTML += '<div class="row" id="pHRow"><div class="label"><p class="label">pH</p></div><div id="legend" class="legend"><div class="bar" id="pHbar"></div><div class="gradContainer" id="gradNum"></div><div class="legendtext"><p class="leftlegendtext">Alkaline</p><p class="rightlegendtext">Acidic</p></div></div></div>';
            var t = document.getElementById("pHbar");
            t.style.background = "linear-gradient(to left, #FF910A, #1C1D4F)";
        } else {
            document.getElementById("pHRow").remove();
        }
    }

    if (val == "odo_level") {
        if (!(legendLabel.innerHTML.includes('\"ODObar\"'))) {
            legendLabel.innerHTML += '<div class="row" id="ODORow"><div class="label"><p class="label">Dissolved Oxygen</p></div><div id="legend" class="legend"><div class="bar" id="ODObar"></div><div class="gradContainer" id="gradNum"></div><div class="legendtext"><p class="leftlegendtext">High</p><p class="rightlegendtext">Low</p></div></div></div>';
            var t = document.getElementById("ODObar");
            t.style.background = "linear-gradient(to left, #F7EE69, #65D350)";
        } else {
            document.getElementById("ODORow").remove();
        }
    }

    if (val == "sal_level") {
        if (!(legendLabel.innerHTML.includes('\"salbar\"'))) {
            legendLabel.innerHTML += '<div class="row" id="salRow"><div class="label"><p class="label">Salinity</p></div><div id="legend" class="legend"><div class="bar" id="salbar"></div><div class="gradContainer" id="gradNum"></div><div class="legendtext"><p class="leftlegendtext">Low</p><p class="rightlegendtext">High</p></div></div></div>';
            var t = document.getElementById("salbar");
            t.style.background = "linear-gradient(to left, #F4156B, #9DA4D8)";
        } else {
            document.getElementById("salRow").remove();
        }
    }

    if (val == "ch_level") {
        if (!(legendLabel.innerHTML.includes('\"chlbar\"'))) {
            legendLabel.innerHTML += '<div class="row" id="chlRow"><div class="label"><p class="label">Chlorophyll</p></div><div id="legend" class="legend"><div class="bar" id="chlbar"></div><div class="gradContainer" id="gradNum"></div><div class="legendtext"><p class="leftlegendtext">Low</p><p class="rightlegendtext">High</p></div></div></div>';
            var t = document.getElementById("chlbar");
            t.style.background = "linear-gradient(to left, #4D16DA, #42D01B)";
        } else {
            document.getElementById("chlRow").remove();
        }
    }

    if (val == "tur_level") {
        if (!(legendLabel.innerHTML.includes('\"turbar\"'))) {
            legendLabel.innerHTML += '<div class="row" id="turRow"><div class="label"><p class="label">Turbidity</p></div><div id="legend" class="legend"><div class="bar" id="turbar"></div><div class="gradContainer" id="gradNum"></div><div class="legendtext"><p class="leftlegendtext">Low</p><p class="rightlegendtext">High</p></div></div></div>';
            var t = document.getElementById("turbar");
            t.style.background = "linear-gradient(to left, #9BF40B, #5AEFF6)";
        } else {
            document.getElementById("turRow").remove();
        }
    }
}

