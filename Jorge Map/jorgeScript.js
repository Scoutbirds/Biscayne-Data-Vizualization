
mapboxgl.accessToken = "pk.eyJ1Ijoic2NvdXRiaXJkcyIsImEiOiJja3Q5ZWl1bmcxYmVqMnBuenduejVvNTdiIn0.YP8oU2KJ4nrwd5IdPIo3XQ";
var map = new mapboxgl.Map({
container: "map",
style: "mapbox://styles/scoutbirds/cktmgxnmt2tjy17o3tovbe9k0",
center: [-80.15, 25.85], // starting position [lng, lat]
zoom: 10.5, // starting zoom
});
map.addControl(new mapboxgl.NavigationControl());



var data = ["Temp", "Sal_Data", "ODO","Chlor_Data","Turb_Data", "pH"];
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


viewButton.addEventListener("click", function () {
for (var i = 0; i < data.length; i++) {     

    if(document.getElementById("Fish").checked)
    {

        if (layer.value === "Temp") {
        map.setPaintProperty("Temp", "circle-opacity", 0.5);
        map.setPaintProperty("Sal_Data", "circle-opacity", 0);
        map.setPaintProperty("ODO", "circle-opacity", 0);
        map.setPaintProperty("Chlor_Data", "circle-opacity", 0);
        map.setPaintProperty("Turb_Data", "circle-opacity", 0);
        map.setPaintProperty("PH_Data", "circle-opacity", 0);
        } 
        if (layer.value === "Sal") {
        map.setPaintProperty("Temp_Data", "circle-opacity", 0);
        map.setPaintProperty("Sal_Data", "circle-opacity", 0.5);
        map.setPaintProperty("ODO_Data", "circle-opacity", 0);
        map.setPaintProperty("Chlor_Data", "circle-opacity", 0);
        map.setPaintProperty("Turb_Data", "circle-opacity", 0);
        map.setPaintProperty("pH", "circle-opacity", 1);
        } 
        if (layer.value === "ODO") {
        map.setPaintProperty("Temp_Data", "circle-opacity", 0);
        map.setPaintProperty("Sal_Data", "circle-opacity", 0);
        map.setPaintProperty("ODO", "circle-opacity", 0.5);
        map.setPaintProperty("Chlor_Data", "circle-opacity", 0);
        map.setPaintProperty("Turb_Data", "circle-opacity", 0);
        map.setPaintProperty("PH_Data", "circle-opacity", 0);
        }
        if (layer.value === "Chlor") 
        {
        map.setPaintProperty("Temp_Data", "circle-opacity", 0);
        map.setPaintProperty("Sal_Data", "circle-opacity", 0);
        map.setPaintProperty("ODO_Data", "circle-opacity", 0);
        map.setPaintProperty("Chlor_Data", "circle-opacity", 0.5);
        map.setPaintProperty("Turb_Data", "circle-opacity", 0);
        map.setPaintProperty("PH_Data", "circle-opacity", 0);
        }
        if (layer.value === "Turb") 
        {
        map.setPaintProperty("Temp_Data", "circle-opacity", 0);
        map.setPaintProperty("Sal_Data", "circle-opacity", 0);
        map.setPaintProperty("ODO_Data", "circle-opacity", 0);
        map.setPaintProperty("Chlor_Data", "circle-opacity", 0);
        map.setPaintProperty("Turb_Data", "circle-opacity", 0.5);
        map.setPaintProperty("PH_Data", "circle-opacity", 0);
        }
        if (layer.value === "PH") 
        {
        map.setPaintProperty("Temp", "circle-opacity", 0);
        map.setPaintProperty("Sal_Data", "circle-opacity", 0);
        map.setPaintProperty("ODO", "circle-opacity", 0);
        map.setPaintProperty("Chlor_Data", "circle-opacity", 0);
        map.setPaintProperty("Turb_Data", "circle-opacity", 0);
        map.setPaintProperty("pH", "circle-opacity", 0.5);
        }
        else {
            map.setPaintProperty(data[i], "circle-opacity", 0);
        }

    }else{
    map.setPaintProperty(data[i], "circle-opacity", 0);
    }
}

for (var i = 0; i < Bdata.length; i++) {     

if(document.getElementById("Buoys").checked){

    if (layer.value === "Temp") {
        map.setPaintProperty("Buoy_Temp", "circle-opacity", 0.5);
        map.setPaintProperty("Buoy_Sal", "circle-opacity", 0);
        map.setPaintProperty("Buoy_ODO", "circle-opacity", 0);
        map.setPaintProperty("Buoy_Chlor", "circle-opacity", 0);
        map.setPaintProperty("Buoy_Turb", "circle-opacity", 0);
        map.setPaintProperty("Buoy_PH", "circle-opacity", 0);
    } 
    if (layer.value === "Sal") {
        map.setPaintProperty("Buoy_Temp", "circle-opacity", 0);
        map.setPaintProperty("Buoy_Sal", "circle-opacity", 0.5);
        map.setPaintProperty("Buoy_ODO", "circle-opacity", 0);
        map.setPaintProperty("Buoy_Chlor", "circle-opacity", 0);
        map.setPaintProperty("Buoy_Turb", "circle-opacity", 0);
        map.setPaintProperty("Buoy_PH", "circle-opacity", 0);

    } 
    if (layer.value === "ODO") {
        map.setPaintProperty("Buoy_Temp", "circle-opacity", 0);
        map.setPaintProperty("Buoy_Sal", "circle-opacity", 0);
        map.setPaintProperty("Buoy_ODO", "circle-opacity", 0.5);
        map.setPaintProperty("Buoy_Chlor", "circle-opacity", 0);
        map.setPaintProperty("Buoy_Turb", "circle-opacity", 0);
        map.setPaintProperty("Buoy_PH", "circle-opacity", 0);
    }
    if (layer.value === "Chlor") {
        map.setPaintProperty("Buoy_Temp", "circle-opacity", 0);
        map.setPaintProperty("Buoy_Sal", "circle-opacity", 0);
        map.setPaintProperty("Buoy_ODO", "circle-opacity", 0);
        map.setPaintProperty("Buoy_Chlor", "circle-opacity", 0.5);
        map.setPaintProperty("Buoy_Turb", "circle-opacity", 0);
        map.setPaintProperty("Buoy_PH", "circle-opacity", 0);
    }
    if (layer.value === "Turb") {
        map.setPaintProperty("Buoy_Temp", "circle-opacity", 0);
        map.setPaintProperty("Buoy_Sal", "circle-opacity", 0);
        map.setPaintProperty("Buoy_ODO", "circle-opacity", 0);
        map.setPaintProperty("Buoy_Chlor", "circle-opacity", 0);
        map.setPaintProperty("Buoy_Turb", "circle-opacity", 0.5);
        map.setPaintProperty("Buoy_PH", "circle-opacity", 0);
    }
    if (layer.value === "PH") {
        map.setPaintProperty("Buoy_Temp", "circle-opacity", 0);
        map.setPaintProperty("Buoy_Sal", "circle-opacity", 0);
        map.setPaintProperty("Buoy_ODO", "circle-opacity", 0);
        map.setPaintProperty("Buoy_Chlor", "circle-opacity", 0);
        map.setPaintProperty("Buoy_Turb", "circle-opacity", 0);
        map.setPaintProperty("Buoy_PH", "circle-opacity", 0.5);
    }
        else {
        map.setPaintProperty(Bdata[i], "circle-opacity", 0);
    }

}else{
    map.setPaintProperty(Bdata[i], "circle-opacity", 0);
}
}
});
