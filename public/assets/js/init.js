 var view ;
 require([
   "esri/Map",
   "esri/views/SceneView",
   "dojo/domReady!"
 ], function(Map, SceneView) {
   var map = new Map({
     basemap: "satellite",
     ground: "world-elevation"
   });

   view = new SceneView({
     container: "viewDiv",
     map: map,
     scale: 80000000,
     center: [-101.17, 21.78],
     zoom: 5
   });
 });