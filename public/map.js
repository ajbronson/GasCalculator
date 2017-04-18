let MapHelper = (function () {
  "use strict";
  var map;
  const publicInterface = {
    init() {
      var mapOptions = {
        center: new google.maps.LatLng(38.964946, -97.015989),
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.Map
      }
      map = new google.maps.Map(document.getElementById("map"), mapOptions);

      let sacramentoMarker = new google.maps.Marker({
          map: map,
          position: new google.maps.LatLng(38.576331, -121.495143),
          animation: google.maps.Animation.DROP
      });

      let provoMarker = new google.maps.Marker({
          map: map,
          position: new google.maps.LatLng(40.233671, -111.658677),
          animation: google.maps.Animation.DROP
      });
    },

    update() {
      let provoMarker = new google.maps.Marker({
          map: map,
          position: new google.maps.LatLng(37.093038, -113.571396),
          animation: google.maps.Animation.DROP
      });
    }
  };
  return publicInterface;
}());
