


var mbAttr = 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community';

var mbUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';

var Stamen_TonerBackground = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}{r}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
});

var Stamen_Watercolor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 1,
	maxZoom: 16,
	ext: 'jpg'
});

var Esri = L.tileLayer(mbUrl, {
  attribution: mbAttr,
  minZoom: 0,
  maxZoom: 20
});

var basemaps = {

    "Watercolour": Stamen_Watercolor,
    "Satellite": Esri,
    // "Outline": Stamen_TonerBackground
};
var map = new L.Map('map', {
  center: new L.LatLng(49.34355326330301,86.36556417039245,),
  zoom: 5,
  layers: [Esri, Stamen_Watercolor ],
  zoomControl: true,
  scrollWheelZoom: false,
  fullscreenControl: {
        pseudoFullscreen: false
    }
});
L.control.layers(basemaps).addTo(map);
// load GeoJSON from an external file
$.getJSON("/geojson/kazakhstan.json",function(data){
  // add GeoJSON layer to the map once the file is loaded
  L.geoJson(data).addTo(map);
});
$.getJSON("/geojson/places.json",function(data){
  // add GeoJSON layer to the map once the file is loaded
  L.geoJson(data).addTo(map);
});
// map.addControl(new L.Control.Fullscreen());
