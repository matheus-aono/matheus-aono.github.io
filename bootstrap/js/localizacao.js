$(document).ready(function(){

  var minhaView = new ol.View({
    center: ol.proj.fromLonLat([-46.6826573, -23.5993334]),
    zoom: 10
  });

  var location = document.getElementById("map");

  var map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: minhaView
    });

    function getLocation(){
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        location.innerHTML = "Geolocation is not supported by this browser.";
      }
    }

    function showPosition(position){
      minhaView.animate({
        center: ol.proj.fromLonLat([position.coords.longitude, position.coords.latitude]),
        zoom: 16,
        duration: 6000
      })
    }

    $("#botao-localizar").click(function(){
      getLocation();
    });
});
