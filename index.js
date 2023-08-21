import kenyaTowns from "./data.js";

// let mapContractor = function (latitude, longitude) {
var map = L.map("map").setView(
  [kenyaTowns[0].latitude, kenyaTowns[0].longitude],
  6
);

L.tileLayer(
  "https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png",
  {
    maxZoom: 19,
    attribution: "© OpenStreetMap",
  }
).addTo(map);

// var marker = L.marker([latitude, longitude]).addTo(map);
// // };

kenyaTowns.map((town, index) => {
  L.marker([town.latitude, town.longitude])
    .addTo(map)
    .bindPopup(
      `
      <b>${town.name}</b><br> 
      <img src="${`${town.name}.png`}" alt="picture of ${
        town.name
      }" style="border:4px solid teal; padding:5px; height:150px;width:150px">. 
      `
    );
});

var polyline = L.polyline(
  kenyaTowns.map((location, index) => [location.latitude, location.longitude]),
  {
    color: "blue",
  }
).addTo(map);
